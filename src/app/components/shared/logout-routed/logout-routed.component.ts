import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionAjaxService } from 'src/app/services/session.ajax.service';

@Component({
  templateUrl: './logout-routed.component.html',
  styleUrls: ['./logout-routed.component.scss']
})
export class LogoutRoutedComponent {
  constructor(
    private oSessionService: SessionAjaxService,
    private oRouter: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.oSessionService.logout();
    this.oSessionService.emit({ type: 'logout' });
    //Snackbar aviso logout correcto
    this.oRouter.navigate(['/home']);
  }

  cancel() {
    this.oRouter.navigate(['/home']);
  }
}
