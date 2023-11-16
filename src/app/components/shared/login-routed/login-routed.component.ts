import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptoService } from 'src/app/services/crypto.service';
import { SessionAjaxService } from 'src/app/services/session.ajax.service';

@Component({
  templateUrl: './login-routed.component.html',
  styleUrls: ['./login-routed.component.scss']
})
export class LoginRoutedComponent {
  loginForm: FormGroup;
  status: HttpErrorResponse | null = null;

  constructor(
    private fb: FormBuilder,
    private oSessionService: SessionAjaxService,

    private oRouter: Router,
    private oCryptoService: CryptoService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.oSessionService.login(this.loginForm.value.username, this.oCryptoService.getSHA256(this.loginForm.value.password)).subscribe({
        next: (data: string) => {
          this.oSessionService.setToken(data);
          this.oSessionService.emit({ type: 'login' });
          //this.oMatSnackBar.open("Loggin successfull.", '', { duration: 2000 });
          this.oRouter.navigate(['/home']);
        },
        error: (error: HttpErrorResponse) => {
          this.status = error;
         // this.oMatSnackBar.open("Error in loggin operation.", '', { duration: 2000 });
        }
      });
    }
  }

  onReset() {
    this.loginForm.reset();
  }

  loginAdmin() {
    this.loginForm.setValue({
      username: 'ucarter',
      password: 'foxforum'
    })
  }

  loginUser() {
    this.loginForm.setValue({
      username: 'pablomarmol',
      password: 'foxforum'
    })
  }

}
