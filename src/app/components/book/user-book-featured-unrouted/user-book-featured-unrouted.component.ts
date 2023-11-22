import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaginatorState } from 'primeng/paginator';
import { IBook, IBookPage, IUser } from 'src/app/model/model.interfaces';
import { SessionAjaxService } from 'src/app/services/session.ajax.service';
import { BookAjaxService } from 'src/app/services/book.ajax.service';

@Component({
  selector: 'app-user-book-featured-unrouted',
  templateUrl: './user-book-featured-unrouted.component.html',
  styleUrls: ['./user-book-featured-unrouted.component.scss']
})
export class UserBookFeaturedUnroutedComponent implements OnInit {


  oPage: IBookPage | undefined;
  oUser: IUser | null = null; 
  orderField: string = "id";
  orderDirection: string = "desc";
  oPaginatorState: PaginatorState = { first: 0, rows: 10, page: 0, pageCount: 0 };
  status: HttpErrorResponse | null = null;
  oBookToRemove: IBook | null = null;
  ref: DynamicDialogRef | undefined;

  constructor(
    public oSessionService: SessionAjaxService,
    private oBookAjaxService: BookAjaxService,
    public oDialogService: DialogService
  ) { }

  ngOnInit() {
    this.getPage();
  }

  getPage(): void {
    const pageSize = 5; 
  
    this.oBookAjaxService.getPageByLoansNumberDesc(pageSize, this.oPaginatorState.page, 0).subscribe({
      next: (data: IBookPage) => {
        this.oPage = data;
        this.oPaginatorState.pageCount = data.totalPages;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    });
  }
  






}
