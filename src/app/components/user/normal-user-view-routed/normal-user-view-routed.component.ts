import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/model/model.interfaces';
import { SessionAjaxService } from 'src/app/services/session.ajax.service';
import { UserAjaxService } from 'src/app/services/user.ajax.service';

@Component({
  selector: 'app-normal-user-view-routed',
  templateUrl: './normal-user-view-routed.component.html',
  styleUrls: ['./normal-user-view-routed.component.scss']
})
export class NormalUserViewRoutedComponent implements OnInit {
  id: number = 1;
  strUserName: string = "";
  oSessionUser: IUser | null = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oSessionService: SessionAjaxService,
    private oUserAjaxService: UserAjaxService
  ) {
    this.id = parseInt(this.oActivatedRoute.snapshot.paramMap.get("id") || "1");

    this.strUserName = oSessionService.getUsername();
    this.oUserAjaxService.getByUsername(this.oSessionService.getUsername()).subscribe({
      next: (oUser: IUser) => {
        this.oSessionUser = oUser;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  ngOnInit() {
  }



}
