import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, Optional } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ILoan } from 'src/app/model/model.interfaces';
import { LoanAjaxService } from 'src/app/services/loan.ajax.service';

@Component({
  selector: 'app-admin-loan-detail-unrouted',
  templateUrl: './admin-loan-detail-unrouted.component.html',
  styleUrls: ['./admin-loan-detail-unrouted.component.scss']
})
export class AdminLoanDetailUnroutedComponent {
  @Input() id: number = 1;

  oLoan: ILoan = { user: {}, book: {} } as ILoan;
  status: HttpErrorResponse | null = null;

  constructor(
    private oLoanAjaxService: LoanAjaxService,
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
    this.oLoanAjaxService.getOne(this.id).subscribe({
      next: (data: ILoan) => {
        this.oLoan = data;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }

    })

  }

}
