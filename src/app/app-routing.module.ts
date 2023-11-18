import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutedComponent } from './components/shared/home-routed/home-routed.component';
import { LoginRoutedComponent } from './components/shared/login-routed/login-routed.component';
import { LogoutRoutedComponent } from './components/shared/logout-routed/logout-routed.component';
import { AdminUserPlistRoutedComponent } from './components/user/admin-user-plist-routed/admin-user-plist-routed.component';
import { AdminUserViewRoutedComponent } from './components/user/admin-user-view-routed/admin-user-view-routed.component';
import { AdminUserNewRoutedComponent } from './components/user/admin-user-new-routed/admin-user-new-routed.component';
import { AdminUserEditRoutedComponent } from './components/user/admin-user-edit-routed/admin-user-edit-routed.component';
import { AdminLoanPlistRoutedComponent } from './components/loan/admin-loan-plist-routed/admin-loan-plist-routed.component';
import { AdminLoanViewRoutedComponent } from './components/loan/admin-loan-view-routed/admin-loan-view-routed.component';
import { AdminLoanNewRoutedComponent } from './components/loan/admin-loan-new-routed/admin-loan-new-routed.component';
import { AdminLoanEditRoutedComponent } from './components/loan/admin-loan-edit-routed/admin-loan-edit-routed.component';
import { AdminBookPlistRoutedComponent } from './components/book/admin-book-plist-routed/admin-book-plist-routed.component';
import { AdminBookViewRoutedComponent } from './components/book/admin-book-view-routed/admin-book-view-routed.component';
import { AdminBookNewRoutedComponent } from './components/book/admin-book-new-routed/admin-book-new-routed.component';
import { AdminBookEditRoutedComponent } from './components/book/admin-book-edit-routed/admin-book-edit-routed.component';

const routes: Routes = [
  //Shared
  { path: '', component: HomeRoutedComponent },
  { path: 'home', component: HomeRoutedComponent },
  { path: 'login', component: LoginRoutedComponent },
  { path: 'logout', component: LogoutRoutedComponent },
  //User
  { path: 'admin/user/plist', component: AdminUserPlistRoutedComponent },
  { path: 'admin/user/view/:id', component: AdminUserViewRoutedComponent },    
  { path: 'admin/user/new', component: AdminUserNewRoutedComponent },
  { path: 'admin/user/edit/:id', component: AdminUserEditRoutedComponent },
  //Book 
  { path: 'admin/book/plist', component: AdminBookPlistRoutedComponent },
  { path: 'admin/book/plist/byuser/:id', component: AdminBookPlistRoutedComponent },
  { path: 'admin/book/view/:id', component: AdminBookViewRoutedComponent },    
  { path: 'admin/book/new', component: AdminBookNewRoutedComponent },  
  { path: 'admin/book/edit/:id', component: AdminBookEditRoutedComponent }, 
  //Loan
  { path: 'admin/loan/plist', component: AdminLoanPlistRoutedComponent },
  { path: 'admin/loan/plist/byuser/:iduser', component: AdminLoanPlistRoutedComponent },  
  { path: 'admin/loan/plist/bybook/:idbook', component: AdminLoanPlistRoutedComponent },  
  { path: 'admin/loan/view/:id', component: AdminLoanViewRoutedComponent },    
  { path: 'admin/loan/new', component: AdminLoanNewRoutedComponent},  
  { path: 'admin/loan/edit/:id', component: AdminLoanEditRoutedComponent },
  //--
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
