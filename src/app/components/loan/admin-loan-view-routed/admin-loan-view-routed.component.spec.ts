import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoanViewRoutedComponent } from './admin-loan-view-routed.component';

describe('AdminLoanViewRoutedComponent', () => {
  let component: AdminLoanViewRoutedComponent;
  let fixture: ComponentFixture<AdminLoanViewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoanViewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminLoanViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
