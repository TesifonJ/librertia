import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IUser, SessionEvent } from 'src/app/model/model.interfaces';
import { SessionAjaxService } from 'src/app/services/session.ajax.service';
import { UserAjaxService } from 'src/app/services/user.ajax.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NormalUserDetailUnroutedComponent } from '../../user/normal-user-detail-unrouted/normal-user-detail-unrouted.component';


@Component({
  selector: 'app-menu-unrouted',
  templateUrl: './menu-unrouted.component.html',
  styleUrls: ['./menu-unrouted.component.scss']
})
export class MenuUnroutedComponent {

  strUserName: string = "";
  oSessionUser: IUser | null = null;
  strUrl: string = "";

  constructor(
    private oSessionService: SessionAjaxService,
    public oDialogService: DialogService,
    private oUserAjaxService: UserAjaxService,
    private oRouter: Router
  ) {
    
    this.oRouter.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.strUrl = ev.url;
      }
    })
    
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
    this.oSessionService.on().subscribe({
      next: (data: SessionEvent) => {
        if (data.type == 'login') {
          this.strUserName = this.oSessionService.getUsername();
          this.oUserAjaxService.getByUsername(this.oSessionService.getUsername()).subscribe({
            next: (oUser: IUser) => {
              this.oSessionUser = oUser;
            },
            error: (error: HttpErrorResponse) => {
              console.log(error);
            }
          });
        }
        if (data.type == 'logout') {
          this.strUserName = "";
        }
      }
    });
  }

  doSessionUserView($event: Event) {
    if (this.oSessionUser) {
      let ref: DynamicDialogRef | undefined;
      ref = this.oDialogService.open(NormalUserDetailUnroutedComponent, {
        data: {
          id: this.oSessionUser.id
        },
        header: 'My Profile',
        width: '25%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false
      });
    }
    return false;
  }

}
