import { SessionAjaxService } from 'src/app/services/session.ajax.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { IBook, IUser } from 'src/app/model/model.interfaces';
import { UserAjaxService } from 'src/app/services/user.ajax.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './home-routed.component.html',
  styleUrls: ['./home-routed.component.scss']
})
export class HomeRoutedComponent {
  idBook: number = 0;
  reloadBooks: Subject<boolean> = new Subject<boolean>();
  strUserName: string = "";
  oSessionUser: IUser | null = null;
  strUrl: string = "";

  constructor(
    private oSessionService: SessionAjaxService,
    
    private oUserAjaxService: UserAjaxService,
    
  ) { this.strUserName = oSessionService.getUsername();
    this.oUserAjaxService.getByUsername(this.oSessionService.getUsername()).subscribe({
      next: (oUser: IUser) => {
        this.oSessionUser = oUser;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });}

  ngOnInit() {
  }

  onBookChange(oBook: IBook) {
    this.idBook = oBook.id;
  }

  onLoanChange(oLoan: Boolean) {
    this.reloadBooks.next(true);
  }
}
