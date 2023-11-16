import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CryptoService } from './services/crypto.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { FooterUnroutedComponent } from './components/shared/footer-unrouted/footer-unrouted.component';
import { HomeRoutedComponent } from './components/shared/home-routed/home-routed.component';

import { LogoutRoutedComponent } from './components/shared/logout-routed/logout-routed.component';
import { MenuUnroutedComponent } from './components/shared/menu-unrouted/menu-unrouted.component';
import { NormalUserFeaturedUnroutedComponent } from './components/user/normal-user-featured-unrouted/normal-user-featured-unrouted.component';
import { NormalUserDetailUnroutedComponent } from './components/user/normal-user-detail-unrouted/normal-user-detail-unrouted.component';
import { AdminUserViewRoutedComponent } from './components/user/admin-user-view-routed/admin-user-view-routed.component';
import { AdminUserSelectionUnroutedComponent } from './components/user/admin-user-selection-unrouted/admin-user-selection-unrouted.component';
import { AdminUserPlistUnroutedComponent } from './components/user/admin-user-plist-unrouted/admin-user-plist-unrouted.component';
import { AdminUserPlistRoutedComponent } from './components/user/admin-user-plist-routed/admin-user-plist-routed.component';
import { AdminUserNewRoutedComponent } from './components/user/admin-user-new-routed/admin-user-new-routed.component';
import { AdminUserEditRoutedComponent } from './components/user/admin-user-edit-routed/admin-user-edit-routed.component';
import { AdminUserDetailUnroutedComponent } from './components/user/admin-user-detail-unrouted/admin-user-detail-unrouted.component';
import { AdminUserFormUnroutedComponent } from './components/user/admin-user-form-unrouted/admin-user-form-unrouted.component';
import { PaginatorModule } from 'primeng/paginator';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserAjaxService } from './services/user.ajax.service';
import { LoanAjaxService } from './services/loan.ajax.service';
import { BookAjaxService } from './services/thread.ajax.service';
import { SessionAjaxService } from './services/session.ajax.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { LoginRoutedComponent } from './components/shared/login-routed/login-routed.component';
import { CalendarModule } from 'primeng/calendar';
import { AdminBookDetailUnroutedComponent } from './components/book/admin-book-detail-unrouted/admin-book-detail-unrouted.component';
import { AdminBookEditRoutedComponent } from './components/book/admin-book-edit-routed/admin-book-edit-routed.component';
import { AdminBookFormUnroutedComponent } from './components/book/admin-book-form-unrouted/admin-book-form-unrouted.component';
import { AdminBookNewRoutedComponent } from './components/book/admin-book-new-routed/admin-book-new-routed.component';
import { AdminBookPlistRoutedComponent } from './components/book/admin-book-plist-routed/admin-book-plist-routed.component';
import { AdminBookPlistUnroutedComponent } from './components/book/admin-book-plist-unrouted/admin-book-plist-unrouted.component';
import { AdminBookViewRoutedComponent } from './components/book/admin-book-view-routed/admin-book-view-routed.component';
import { UserBookDetailUnroutedComponent } from './components/book/user-book-detail-unrouted/user-book-detail-unrouted.component';
import { UserBookFormUnroutedComponent } from './components/book/user-book-form-unrouted/user-book-form-unrouted.component';
import { UserBookPlistUnroutedComponent } from './components/book/user-book-plist-unrouted/user-book-plist-unrouted.component';
import { AdminLoanDetailUnroutedComponent } from './components/loan/admin-loan-detail-unrouted/admin-loan-detail-unrouted.component';
import { AdminLoanEditRoutedComponent } from './components/loan/admin-loan-edit-routed/admin-loan-edit-routed.component';
import { AdminLoanFormUnroutedComponent } from './components/loan/admin-loan-form-unrouted/admin-loan-form-unrouted.component';
import { AdminLoanNewRoutedComponent } from './components/loan/admin-loan-new-routed/admin-loan-new-routed.component';
import { AdminLoanPlistRoutedComponent } from './components/loan/admin-loan-plist-routed/admin-loan-plist-routed.component';
import { AdminLoanPlistUnroutedComponent } from './components/loan/admin-loan-plist-unrouted/admin-loan-plist-unrouted.component';
import { AdminLoanViewRoutedComponent } from './components/loan/admin-loan-view-routed/admin-loan-view-routed.component';
import { UserLoanDetailUnroutedComponent } from './components/loan/user-loan-detail-unrouted/user-loan-detail-unrouted.component';
import { UserLoanFormUnroutedComponent } from './components/loan/user-loan-form-unrouted/user-loan-form-unrouted.component';
import { UserLoanPlistUnroutedComponent } from './components/loan/user-loan-plist-unrouted/user-loan-plist-unrouted.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminBookSelectionUnroutedComponent } from './components/book/admin-book-selection-unrouted/admin-book-selection-unrouted.component';
import { TrimPipe } from './pipes/trim.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    TrimPipe,
    AppComponent,
    //Shared
    MenuUnroutedComponent,
    HomeRoutedComponent,
    LoginRoutedComponent,
    LogoutRoutedComponent,
    FooterUnroutedComponent,
    //Normal User
    NormalUserFeaturedUnroutedComponent,
    NormalUserDetailUnroutedComponent,
    //Admin User
    AdminUserViewRoutedComponent,
    AdminUserSelectionUnroutedComponent,
    AdminUserPlistUnroutedComponent,
    AdminUserPlistRoutedComponent,
    AdminUserNewRoutedComponent,
    AdminUserEditRoutedComponent,
    AdminUserDetailUnroutedComponent,
    AdminUserFormUnroutedComponent,
    AdminBookDetailUnroutedComponent,
    AdminBookEditRoutedComponent,
    AdminBookFormUnroutedComponent,
    AdminBookNewRoutedComponent,
    AdminBookPlistRoutedComponent,
    AdminBookPlistUnroutedComponent,
    AdminBookViewRoutedComponent,
    UserBookDetailUnroutedComponent,
    UserBookFormUnroutedComponent,
    UserBookPlistUnroutedComponent,
    AdminLoanDetailUnroutedComponent,
    AdminLoanEditRoutedComponent,
    AdminLoanFormUnroutedComponent,
    AdminLoanNewRoutedComponent,
    AdminLoanPlistRoutedComponent,
    AdminLoanPlistUnroutedComponent,
    AdminLoanViewRoutedComponent,
    UserLoanDetailUnroutedComponent,
    UserLoanFormUnroutedComponent,
    UserLoanPlistUnroutedComponent,
    AdminBookSelectionUnroutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //--
    BrowserAnimationsModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TableModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    CalendarModule,
    TooltipModule,

    //--
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    //--
  ],
  providers: [
    MatSnackBar,
    MessageService,
    DialogService,
    ConfirmationService,
    UserAjaxService,
    LoanAjaxService,
    BookAjaxService,
    SessionAjaxService,
    CryptoService,
    CryptoService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
