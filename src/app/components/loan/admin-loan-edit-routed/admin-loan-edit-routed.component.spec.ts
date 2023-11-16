import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoanEditRoutedComponent } from './admin-loan-edit-routed.component';

describe('AdminLoanEditRoutedComponent', () => {
  let component: AdminLoanEditRoutedComponent;
  let fixture: ComponentFixture<AdminLoanEditRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoanEditRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminLoanEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
