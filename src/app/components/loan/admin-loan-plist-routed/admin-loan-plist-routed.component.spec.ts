import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoanPlistRoutedComponent } from './admin-loan-plist-routed.component';

describe('AdminLoanPlistRoutedComponent', () => {
  let component: AdminLoanPlistRoutedComponent;
  let fixture: ComponentFixture<AdminLoanPlistRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoanPlistRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminLoanPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
