import { IBook, IBookPage } from './../../../model/model.interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaginatorState } from 'primeng/paginator';
import { BookAjaxService } from 'src/app/services/book.ajax.service';

@Component({
  selector: 'app-admin-book-selection-unrouted',
  templateUrl: './admin-book-selection-unrouted.component.html',
  styleUrls: ['./admin-book-selection-unrouted.component.scss']
})
export class AdminBookSelectionUnroutedComponent {

  @Input() id_user: number = 0; //filter by user

  oPage: IBookPage | undefined;
  orderField: string = "id";
  orderDirection: string = "asc";
  oPaginatorState: PaginatorState = { first: 0, rows: 10, page: 0, pageCount: 0 };
  status: HttpErrorResponse | null = null;
  oBookToRemove: IBook | null = null;

  constructor(
    private oBookAjaxService: BookAjaxService,
    public oDialogService: DialogService,
    public oDynamicDialogRef: DynamicDialogRef
  ) { }

  ngOnInit() {
    this.getPage();
  }

  getPage(): void {
    this.oBookAjaxService.getPage(this.oPaginatorState.rows, this.oPaginatorState.page, this.orderField, this.orderDirection, this.id_user).subscribe({
      next: (data: IBookPage) => {
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

  onSelectBook(oBook: IBook) {
    this.oDynamicDialogRef.close(oBook);
  }

}
