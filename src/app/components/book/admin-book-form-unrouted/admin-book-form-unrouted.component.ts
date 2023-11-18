import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IBook, IUser, formOperation } from 'src/app/model/model.interfaces';
import { BookAjaxService } from 'src/app/services/book.ajax.service';
import { AdminUserSelectionUnroutedComponent } from '../../user/admin-user-selection-unrouted/admin-user-selection-unrouted.component';

@Component({
  selector: 'app-admin-book-form-unrouted',
  templateUrl: './admin-book-form-unrouted.component.html',
  styleUrls: ['./admin-book-form-unrouted.component.scss']
})
export class AdminBookFormUnroutedComponent {
  @Input() id: number = 1;
  @Input() operation: formOperation = 'NEW'; //new or edit

  BookForm!: FormGroup;
  oBook: IBook = { user: {} } as IBook;
  status: HttpErrorResponse | null = null;

  oDynamicDialogRef: DynamicDialogRef | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private oBookAjaxService: BookAjaxService,
    private router: Router,
    private oMatSnackBar: MatSnackBar,
    public oDialogService: DialogService
  ) {
    this.initializeForm(this.oBook);
  }

  initializeForm(oBook: IBook) {
    this.BookForm = this.formBuilder.group({
      id: [oBook.id],
      title: [oBook.title, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]],
      user: this.formBuilder.group({
        id: [oBook.user.id, Validators.required]
      })
    });
  }

  ngOnInit() {
    if (this.operation == 'EDIT') {
      this.oBookAjaxService.getOne(this.id).subscribe({
        next: (data: IBook) => {
          this.oBook = data;
          this.initializeForm(this.oBook);
        },
        error: (error: HttpErrorResponse) => {
          this.status = error;
          this.oMatSnackBar.open("Error reading Book from server.", '', { duration: 2000 });
        }
      })
    } else {
      this.initializeForm(this.oBook);
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.BookForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.BookForm.valid) {
      if (this.operation === 'NEW') {
        this.oBookAjaxService.newOne(this.BookForm.value).subscribe({
          next: (data: IBook) => {
            this.oBook = { "user": {} } as IBook;
            this.initializeForm(this.oBook); //el id se genera en el servidor
            this.oMatSnackBar.open('Book has been created.', '', { duration: 2000 });
            this.router.navigate(['/admin', 'Book', 'view', data]);
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
            this.oMatSnackBar.open('Failed to create Book.', '', { duration: 2000 });
          }
        });
      } else {
        this.oBookAjaxService.updateOne(this.BookForm.value).subscribe({
          next: (data: IBook) => {
            this.oBook = data;
            this.initializeForm(this.oBook);
            this.oMatSnackBar.open('Book has been updated.', '', { duration: 2000 });
            this.router.navigate(['/admin', 'Book', 'view', this.oBook.id]);
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
            this.oMatSnackBar.open('Failed to update Book.', '', { duration: 2000 });
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
        this.oBook.user = oUser;
        this.BookForm.controls['user'].patchValue({ id: oUser.id })
      }
    });
  }

}
