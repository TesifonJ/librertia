import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { IBook, ILoan, ILoanPage, IUser } from 'src/app/model/model.interfaces';
import { AdminLoanDetailUnroutedComponent } from '../admin-loan-detail-unrouted/admin-loan-detail-unrouted.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaginatorState } from 'primeng/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoanAjaxService } from 'src/app/services/loan.ajax.service';
import { BookAjaxService } from 'src/app/services/book.ajax.service';
import { UserAjaxService } from 'src/app/services/user.ajax.service';
import { Subject } from 'rxjs';
import { ConfirmEventType, ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-admin-loan-plist-unrouted',
  templateUrl: './admin-loan-plist-unrouted.component.html',
  styleUrls: ['./admin-loan-plist-unrouted.component.scss']
})
export class AdminLoanPlistUnroutedComponent {
  @Input() forceReload: Subject<boolean> = new Subject<boolean>();
  @Input() id_user: number = 0; //filter by user
  @Input() id_book: number = 0; //filter by Book

  oPage: ILoanPage | undefined;
  oUser: IUser | null = null; // data of user if id_user is set for filter
  oBook: IBook | null = null; // data of Book if id_Book is set for filter
  orderField: string = "id";
  orderDirection: string = "asc";
  oPaginatorState: PaginatorState = { first: 0, rows: 10, page: 0, pageCount: 0 };
  status: HttpErrorResponse | null = null;
  oLoanToRemove: ILoan | null = null;

  constructor(
    private oUserAjaxService: UserAjaxService,
    private oBookAjaxService: BookAjaxService,
    private oLoanAjaxService: LoanAjaxService,
    public oDialogService: DialogService,
    private oConfirmationService: ConfirmationService,
    private oMatSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getPage();
    if (this.id_user > 0) {
      this.getUser();
    }
    if (this.id_book > 0) {
      this.getBook();
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
    this.oLoanAjaxService.getPage(this.oPaginatorState.rows, this.oPaginatorState.page, this.orderField, this.orderDirection, this.id_user, this.id_book).subscribe({
      next: (data: ILoanPage) => {
        this.oPage = data;
        this.oPaginatorState.pageCount = data.totalPages;
        console.log(this.oPaginatorState);
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

  doView(u: ILoan) {
    let ref: DynamicDialogRef | undefined;
    ref = this.oDialogService.open(AdminLoanDetailUnroutedComponent, {
      data: {
        id: u.id
      },
      header: 'View of Loan',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false
    });
  }

  doRemove(u: ILoan) {
    this.oLoanToRemove = u;
    this.oConfirmationService.confirm({
      accept: () => {
        this.oMatSnackBar.open("The Loan has been removed.", '', { duration: 2000 });
        this.oLoanAjaxService.removeOne(this.oLoanToRemove?.id).subscribe({
          next: () => {
            this.getPage();
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
            this.oMatSnackBar.open("The Loan hasn't been removed.", "", { duration: 2000 });
          }
        });
      },
      reject: (type: ConfirmEventType) => {
        this.oMatSnackBar.open("The Loan hasn't been removed.", "", { duration: 2000 });
      }
    });
  }

  getUser(): void {
    this.oUserAjaxService.getOne(this.id_user).subscribe({
      next: (data: IUser) => {
        this.oUser = data;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }

    })
  }

  getBook(): void {
    this.oBookAjaxService.getOne(this.id_book).subscribe({
      next: (data: IBook) => {
        this.oBook = data;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }

    })
  }

}
