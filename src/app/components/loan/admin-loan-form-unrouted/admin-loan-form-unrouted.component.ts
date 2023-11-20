import { Component, Input } from '@angular/core';
import { IBook, ILoan, IUser, formOperation } from 'src/app/model/model.interfaces';
import { AdminUserSelectionUnroutedComponent } from '../../user/admin-user-selection-unrouted/admin-user-selection-unrouted.component';
import { AdminBookSelectionUnroutedComponent } from '../../book/admin-book-selection-unrouted/admin-book-selection-unrouted.component';
import { HttpErrorResponse } from '@angular/common/http';
import { CALENDAR_ES } from 'src/environment/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { LoanAjaxService } from 'src/app/services/loan.ajax.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-loan-form-unrouted',
  templateUrl: './admin-loan-form-unrouted.component.html',
  styleUrls: ['./admin-loan-form-unrouted.component.scss']
})
export class AdminLoanFormUnroutedComponent {
  @Input() id: number = 1;
  @Input() operation: formOperation = 'NEW'; // new or edit

  es = CALENDAR_ES;

  LoanForm!: FormGroup;
  oLoan: ILoan = {creationDate: new Date(Date.now()), dueDate: {}, returnDate: {}, user: {}, book: {} } as ILoan;
  status: HttpErrorResponse | null = null;

  oDynamicDialogRef: DynamicDialogRef | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private oLoanAjaxService: LoanAjaxService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    public oDialogService: DialogService
  ) {
    this.initializeForm(this.oLoan);
  }

  initializeForm(oLoan: ILoan) {
    this.LoanForm = this.formBuilder.group({
      id: [oLoan.id],
      creationDate: [new Date(oLoan.creationDate), [Validators.required]],
      dueDate: [new Date(oLoan.dueDate), [Validators.required]],
      returnDate: [new Date(oLoan.returnDate)],
      user: this.formBuilder.group({
        id: [oLoan.user.id, Validators.required]
      }),
      Book: this.formBuilder.group({
        id: [oLoan.book.id, Validators.required]
      })
    });
  }

  ngOnInit() {
    if (this.operation == 'EDIT') {
      this.oLoanAjaxService.getOne(this.id).subscribe({
        next: (data: ILoan) => {
          this.oLoan = data;
          this.initializeForm(this.oLoan);
        },
        error: (error: HttpErrorResponse) => {
          this.status = error;
          this.matSnackBar.open("Error reading Loan from server.", '', { duration: 2000 });
        }
      });
    } else {
      this.initializeForm(this.oLoan);
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.LoanForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.LoanForm.valid) {
      if (this.operation == 'NEW') {
        this.oLoanAjaxService.newOne(this.LoanForm.value).subscribe({
          next: (data: ILoan) => {
            this.oLoan = { "user": {}, "book": {} } as ILoan;
            this.initializeForm(this.oLoan);
            this.matSnackBar.open("Loan has been created.", '', { duration: 2000 });
            this.router.navigate(['/admin', 'Loan', 'view', data]);
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
            this.matSnackBar.open("Can't create Loan.", '', { duration: 2000 });
          }
        });
      } else {
        this.oLoanAjaxService.updateOne(this.LoanForm.value).subscribe({
          next: (data: ILoan) => {
            this.oLoan = data;
            this.initializeForm(this.oLoan);
            this.matSnackBar.open("Loan has been updated.", '', { duration: 2000 });
            this.router.navigate(['/admin', 'Loan', 'view', this.oLoan.id]);
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
            this.matSnackBar.open("Can't update Loan.", '', { duration: 2000 });
          }
        });
      }
    }
  }

  onShowUsersSelection() {
    this.oDynamicDialogRef = this.oDialogService.open(AdminUserSelectionUnroutedComponent, {
      header: 'Select a User',
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.oDynamicDialogRef.onClose.subscribe((oUser: IUser) => {
      if (oUser) {
        this.oLoan.user = oUser;
        this.LoanForm.controls['user'].patchValue({ id: oUser.id })
      }
    });
  }

  onShowBooksSelection() {
    this.oDynamicDialogRef = this.oDialogService.open(AdminBookSelectionUnroutedComponent, {
      header: 'Select a Book',
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.oDynamicDialogRef.onClose.subscribe((oBook: IBook) => {
      if (oBook) {
        this.oLoan.book = oBook;
        this.LoanForm.controls['Book'].patchValue({ id: oBook.id })
      }
    });
  }

}
