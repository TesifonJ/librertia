import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoanDetailUnroutedComponent } from './user-loan-detail-unrouted.component';

describe('UserLoanDetailUnroutedComponent', () => {
  let component: UserLoanDetailUnroutedComponent;
  let fixture: ComponentFixture<UserLoanDetailUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoanDetailUnroutedComponent]
    });
    fixture = TestBed.createComponent(UserLoanDetailUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
