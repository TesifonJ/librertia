import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoanFormUnroutedComponent } from './admin-loan-form-unrouted.component';

describe('AdminLoanFormUnroutedComponent', () => {
  let component: AdminLoanFormUnroutedComponent;
  let fixture: ComponentFixture<AdminLoanFormUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoanFormUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminLoanFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
