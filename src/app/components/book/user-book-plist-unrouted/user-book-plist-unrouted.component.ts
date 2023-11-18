import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserBookFormUnroutedComponent } from '../user-book-form-unrouted/user-book-form-unrouted.component';
import { UserLoanFormUnroutedComponent } from '../../loan/user-loan-form-unrouted/user-loan-form-unrouted.component';
import { HttpErrorResponse } from '@angular/common/http';
import { IBook, IUser, ILoan, ILoanPage } from 'src/app/model/model.interfaces';
import { ConfirmEventType, ConfirmationService } from 'primeng/api';
import { AdminLoanDetailUnroutedComponent } from '../../loan/admin-loan-detail-unrouted/admin-loan-detail-unrouted.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaginatorState } from 'primeng/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoanAjaxService } from 'src/app/services/loan.ajax.service';
import { BookAjaxService } from 'src/app/services/book.ajax.service';
import { SessionAjaxService } from 'src/app/services/session.ajax.service';
import { UserAjaxService } from 'src/app/services/user.ajax.service';

@Component({
  selector: 'app-user-book-plist-unrouted',
  templateUrl: './user-book-plist-unrouted.component.html',
  styleUrls: ['./user-book-plist-unrouted.component.scss']
})
export class UserBookPlistUnroutedComponent {
  
  @Input()
  set id_user(value: number) {
    if (value) {
      this.id_user_filter = value;
    } else {
      this.id_user_filter = 0;
    }
    this.getPage();
  }
  get id_user(): number {
    return this.id_user_filter;
  }

  @Input()
  set id_Book(value: number) {
    if (value) {
      this.id_Book_filter = value;
    } else {
      this.id_Book_filter = 0;
    }
    this.getPage();
  }
  get id_Book(): number {
    return this.id_Book_filter;
  }

  @Output() Loan_change = new EventEmitter<Boolean>();

  id_Book_filter: number = 0; //filter by Book
  id_user_filter: number = 0; //filter by Book

  oPage: ILoanPage | undefined;
  oUser: IUser | null = null; // data of user if id_user is set for filter
  oBook: IBook | null = null; // data of Book if id_Book is set for filter
  orderField: string = "id";
  orderDirection: string = "desc";
  oPaginatorState: PaginatorState = { first: 0, rows: 10, page: 0, pageCount: 0 };
  status: HttpErrorResponse | null = null;
  oLoanToRemove: ILoan | null = null;

  constructor(
    private oUserAjaxService: UserAjaxService,
    public oSessionService: SessionAjaxService,
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
    if (this.id_Book > 0) {
      this.getBook();
    }
  }

  getPage(): void {
    this.oLoanAjaxService.getPage(this.oPaginatorState.rows, this.oPaginatorState.page, this.orderField, this.orderDirection, this.id_user_filter, this.id_Book_filter).subscribe({
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

  ref: DynamicDialogRef | undefined;

  doView(u: ILoan) {
    this.ref = this.oDialogService.open(AdminLoanDetailUnroutedComponent, {
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
            this.Loan_change.emit(true);
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
    this.oBookAjaxService.getOne(this.id_Book).subscribe({
      next: (data: IBook) => {
        this.oBook = data;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }

    })
  }

  postNewLoan(): void {
    if (this.id_Book_filter > 0 && this.oSessionService.isSessionActive()) {

      this.ref = this.oDialogService.open(UserLoanFormUnroutedComponent, {
        data: {
          id_Book: this.id_Book_filter,
        },
        header: 'Post a new Loan',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false
      });

      this.ref.onClose.subscribe((nLoan: number) => {
        this.getPage();
        this.Loan_change.emit(true);
      });
    }
  }



  postNewBook(): void {
    if (this.id_Book_filter > 0 && this.oSessionService.isSessionActive()) {

      this.ref = this.oDialogService.open(UserBookFormUnroutedComponent, {
        data: {
          id_Book: this.id_Book_filter,
        },
        header: 'Post a new Book',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false
      });

      this.ref.onClose.subscribe((nBook: number) => {
        this.getPage();
        this.Loan_change.emit(true);
      });
    }
  }
}
