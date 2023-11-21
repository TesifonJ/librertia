import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IBook, IUser, IBookPage } from 'src/app/model/model.interfaces';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaginatorState } from 'primeng/paginator';
import { BookAjaxService } from 'src/app/services/book.ajax.service';
import { SessionAjaxService } from 'src/app/services/session.ajax.service';
import { UserAjaxService } from 'src/app/services/user.ajax.service';
import { Subject } from 'rxjs';
import { UserBookFormUnroutedComponent } from '../user-book-form-unrouted/user-book-form-unrouted.component';

@Component({
  selector: 'app-user-book-plist-unrouted',
  templateUrl: './user-book-plist-unrouted.component.html',
  styleUrls: ['./user-book-plist-unrouted.component.scss']
})
export class UserBookPlistUnroutedComponent {
  id_Book_filter: number = 0; //filter by Book
  id_user_filter: number = 0; //filter by Book

  @Input() id_user: number = 0; //filter by user
  @Input() reload: Subject<boolean> = new Subject<boolean>();
  @Output() book_selection = new EventEmitter<IBook>();
  @Output() book_change = new EventEmitter<Boolean>();


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
    public oDialogService: DialogService
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

  onPageChange(event: PaginatorState) {
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

  postNewBook(): void {
    if (this.oSessionService.isSessionActive()) {
      this.ref = this.oDialogService.open(UserBookFormUnroutedComponent, {
        data: {
          id_book: this.id_Book_filter,
        },
        header: 'Post a new Book',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false
      });

      this.ref.onClose.subscribe((nBook: number) => {
        this.getPage();
        this.book_change.emit(true);
      });
    }
  }
}
