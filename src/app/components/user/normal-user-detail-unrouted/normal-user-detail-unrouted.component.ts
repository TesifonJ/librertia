import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, Optional } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IUser } from 'src/app/model/model.interfaces';
import { UserAjaxService } from 'src/app/services/user.ajax.service';

@Component({
  selector: 'app-normal-user-detail-unrouted',
  templateUrl: './normal-user-detail-unrouted.component.html',
  styleUrls: ['./normal-user-detail-unrouted.component.scss']
})
export class NormalUserDetailUnroutedComponent {

  @Input() id: number = 1;

  oUser: IUser = {} as IUser;
  status: HttpErrorResponse | null = null;

  constructor(
    private oUserAjaxService: UserAjaxService,
    @Optional() public ref:DynamicDialogRef,
    @Optional() public config:DynamicDialogConfig
  ) {     
    if (config){
      if (config.data){
        this.id = config.data.id;
      }
    }    
  }

  ngOnInit() {
    console.log(this.id);
    this.getOne();
  }

  getOne(): void {
    this.oUserAjaxService.getOne(this.id).subscribe({    
      next: (data: IUser) => {
        this.oUser = data;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }

    })

  }

}
