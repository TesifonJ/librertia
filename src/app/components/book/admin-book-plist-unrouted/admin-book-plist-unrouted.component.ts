import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ConfirmEventType, ConfirmationService } from 'primeng/api';
import { PaginatorState } from 'primeng/paginator';
import { IBook, IBookPage, IUser } from 'src/app/model/model.interfaces';
import { AdminBookDetailUnroutedComponent } from '../admin-book-detail-unrouted/admin-book-detail-unrouted.component';
import { UserAjaxService } from 'src/app/services/user.ajax.service';
import { BookAjaxService } from 'src/app/services/book.ajax.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Component({
  providers: [ConfirmationService],
  selector: 'app-admin-book-plist-unrouted',
  templateUrl: './admin-book-plist-unrouted.component.html',
  styleUrls: ['./admin-book-plist-unrouted.component.scss']
})
export class AdminBookPlistUnroutedComponent {

  @Input() forceReload: Subject<boolean> = new Subject<boolean>();
  @Input() owner_id: number = 0; //filter by user

  oPage: IBookPage | undefined;
  oUser: IUser | null = null; // data of user if id_user is set for filter
  orderField: string = "id";
  orderDirection: string = "asc";
  oPaginatorState: PaginatorState = { first: 0, rows: 10, page: 0, pageCount: 0 };
  status: HttpErrorResponse | null = null;
  oBookToRemove: IBook | null = null;
  ref: DynamicDialogRef | undefined;

  constructor(
    private oUserAjaxService: UserAjaxService,
    private oBookAjaxService: BookAjaxService,
    public oDialogService: DialogService,
    private oCconfirmationService: ConfirmationService,
    private oMatSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getPage();
    if (this.owner_id > 0) {
      this.getUser();
    }
    this.forceReload.subscribe({
      next: (v) => {
        if (v) {
          this.getPage();
        }
      }
    });
  }

  getPage(): void {
    this.oBookAjaxService.getPage(this.oPaginatorState.rows, this.oPaginatorState.page, this.orderField, this.orderDirection, this.owner_id).subscribe({
      next: (data: IBookPage) => {
        this.oPage = data;
        this.oPaginatorState.pageCount = data.totalPages;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    })
  }

  onPageChang(event: PaginatorState) {
    this.oPaginatorState.rows = event.rows;
    this.oPaginatorState.page = event.page;
    this.getPage();
  }

  doOrder(fieldorder: string) {
    this.orderField = fieldorder;
    if (this.orderDirection == "asc") {
      this.orderDirection = "desc";
    } else {
      this.orderDirection = "asc";
    }
    this.getPage();
  }

  doView(b: IBook) {
    this.ref = this.oDialogService.open(AdminBookDetailUnroutedComponent, {
      data: {
        id: b.id
      },
      header: 'View of Book',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false
    });
  }

  doRemove(b: IBook) {
    this.oBookToRemove = b;
    this.oCconfirmationService.confirm({
      accept: () => {
        this.oMatSnackBar.open("The Book has been removed.", '', { duration: 2000 });
        this.oBookAjaxService.removeOne(this.oBookToRemove?.id).subscribe({
          next: () => {
            this.getPage();
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
            this.oMatSnackBar.open("The Book hasn't been removed.", "", { duration: 2000 });
          }
        });
      },
      reject: (type: ConfirmEventType) => {
        this.oMatSnackBar.open("The Book hasn't been removed.", "", { duration: 2000 });
      }
    });
  }

  getUser(): void {
    this.oUserAjaxService.getOne(this.owner_id).subscribe({
      next: (data: IUser) => {
        this.oUser = data;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }

    })
  }

}
