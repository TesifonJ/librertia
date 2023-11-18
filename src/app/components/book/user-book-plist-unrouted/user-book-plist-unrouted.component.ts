import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IBook, IUser, IBookPage } from 'src/app/model/model.interfaces';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaginatorState } from 'primeng/paginator';
import { BookAjaxService } from 'src/app/services/book.ajax.service';
import { SessionAjaxService } from 'src/app/services/session.ajax.service';
import { UserAjaxService } from 'src/app/services/user.ajax.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-book-plist-unrouted',
  templateUrl: './user-book-plist-unrouted.component.html',
  styleUrls: ['./user-book-plist-unrouted.component.scss']
})
export class UserBookPlistUnroutedComponent {
 
  @Input() id_user: number = 0; //filter by user
  @Input() reload: Subject<boolean> = new Subject<boolean>();
  @Output() book_selection = new EventEmitter<IBook>();

  activeOrder: boolean = true; //true=new false=popular always desc
  activeBook: IBook | null = null;

  oPage: IBookPage | undefined;
  oUser: IUser | null = null; // data of user if id_user is set for filter
  orderField: string = "id";
  orderDirection: string = "desc";
  oPaginatorState: PaginatorState = { first: 0, rows: 50, page: 0, pageCount: 0 };
  status: HttpErrorResponse | null = null;
  oBookToRemove: IBook | null = null;
  ref: DynamicDialogRef | undefined;

  constructor(
    private oUserAjaxService: UserAjaxService,
    public oSessionService: SessionAjaxService,
    private oBookAjaxService: BookAjaxService,
  ) { }

  ngOnInit() {
    this.reload.subscribe(Response => {
      if (Response) {
        if (this.activeOrder) {
          this.oBookAjaxService.getPage(this.oPaginatorState.rows, this.oPaginatorState.page, this.orderField, this.orderDirection, this.id_user).subscribe({
            next: (data: IBookPage) => {
              this.oPage = data;
              this.oPaginatorState.pageCount = data.totalPages;
            },
            error: (error: HttpErrorResponse) => {
              this.status = error;
            }
          })
        } else {
          this.oBookAjaxService.getPageByLoansNumberDesc(this.oPaginatorState.rows, this.oPaginatorState.page, 0).subscribe({
            next: (data: IBookPage) => {
              this.oPage = data;
              this.oPaginatorState.pageCount = data.totalPages;
            },
            error: (error: HttpErrorResponse) => {
              this.status = error;
            }
          })
        }
      }
    });
    if (this.activeOrder) {
      this.getPage();
    } else {
      this.getPageByLoansNumberDesc();
    }
    if (this.id_user > 0) {
      this.getUser();
    }
  }

  getPage(): void {
    this.oBookAjaxService.getPage(this.oPaginatorState.rows, this.oPaginatorState.page, this.orderField, this.orderDirection, this.id_user).subscribe({
      next: (data: IBookPage) => {
        this.oPage = data;
        if (this.oPage.content.length > 0) {
          this.activeBook = this.oPage.content[0];
          this.book_selection.emit(this.activeBook);
        }
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
    if (this.activeOrder) {
      this.getPage();
    } else {
      this.getPageByLoansNumberDesc();
    }
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

  doShowLoans(oBook: IBook) {
    this.book_selection.emit(oBook);
    this.activeBook = oBook;
    return false;
  }

  onOrderChange(event: any) {
    this.activeOrder = !this.activeOrder;
    this.orderDirection = "desc";
    if (this.activeOrder) {
      this.getPage();
    } else {
      this.getPageByLoansNumberDesc();
    }
  }

  getPageByLoansNumberDesc(): void {
    this.oBookAjaxService.getPageByLoansNumberDesc(this.oPaginatorState.rows, this.oPaginatorState.page, 0).subscribe({
      next: (data: IBookPage) => {
        this.oPage = data;
        this.oPaginatorState.pageCount = data.totalPages;
        this.activeBook = this.oPage.content[0];
        this.book_selection.emit(this.activeBook);
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    })
  }

}
