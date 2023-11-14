import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { IUser, IUserPage } from 'src/app/model/model.interfaces';
import { UserAjaxService } from 'src/app/services/user.ajax.service';

@Component({
  selector: 'app-normal-user-featured-unrouted',
  templateUrl: './normal-user-featured-unrouted.component.html',
  styleUrls: ['./normal-user-featured-unrouted.component.scss']
})
export class NormalUserFeaturedUnroutedComponent {

  oPage: IUserPage | undefined;
  oPaginatorState: PaginatorState = { first: 0, rows: 20, page: 0, pageCount: 0 };
  status: HttpErrorResponse | null = null;
  oUserToRemove: IUser | null = null;

  constructor(
    private oUserAjaxService: UserAjaxService,
  ) { }

  ngOnInit() {
    this.getPage();
  }

  getPage(): void {
    this.oUserAjaxService.getPageByRepliesNumberDesc(this.oPaginatorState.rows, this.oPaginatorState.page).subscribe({
      next: (data: IUserPage) => {
        this.oPage = data;
        this.oPaginatorState.pageCount = data.totalPages;
        console.log(this.oPaginatorState);
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    })
  }

}
