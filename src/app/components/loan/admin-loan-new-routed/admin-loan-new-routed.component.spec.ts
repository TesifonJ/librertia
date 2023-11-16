import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoanNewRoutedComponent } from './admin-loan-new-routed.component';

describe('AdminLoanNewRoutedComponent', () => {
  let component: AdminLoanNewRoutedComponent;
  let fixture: ComponentFixture<AdminLoanNewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoanNewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminLoanNewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
