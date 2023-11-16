import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoanPlistUnroutedComponent } from './admin-loan-plist-unrouted.component';

describe('AdminLoanPlistUnroutedComponent', () => {
  let component: AdminLoanPlistUnroutedComponent;
  let fixture: ComponentFixture<AdminLoanPlistUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoanPlistUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminLoanPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
