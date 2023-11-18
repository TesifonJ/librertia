import { BookAjaxService } from 'src/app/services/book.ajax.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, Optional } from '@angular/core';
import { IBook } from 'src/app/model/model.interfaces';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-admin-book-detail-unrouted',
  templateUrl: './admin-book-detail-unrouted.component.html',
  styleUrls: ['./admin-book-detail-unrouted.component.scss']
})
export class AdminBookDetailUnroutedComponent {
  @Input() id: number = 1;

  oBook: IBook = { user: {} } as IBook;
  status: HttpErrorResponse | null = null;

  constructor(
    private oBookAjaxService: BookAjaxService,
    @Optional() public ref: DynamicDialogRef,
    @Optional() public config: DynamicDialogConfig
  ) {
    if (config) {
      if (config.data) {
        this.id = config.data.id;
      }
    }
  }

  ngOnInit() {
    this.getOne();
  }

  getOne(): void {
    this.oBookAjaxService.getOne(this.id).subscribe({
      next: (data: IBook) => {
        this.oBook = data;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }

    })

  }

}
