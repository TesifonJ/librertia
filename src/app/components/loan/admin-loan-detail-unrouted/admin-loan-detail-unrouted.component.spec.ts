import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoanDetailUnroutedComponent } from './admin-loan-detail-unrouted.component';

describe('AdminLoanDetailUnroutedComponent', () => {
  let component: AdminLoanDetailUnroutedComponent;
  let fixture: ComponentFixture<AdminLoanDetailUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoanDetailUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminLoanDetailUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
