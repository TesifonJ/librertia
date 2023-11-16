import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoanFormUnroutedComponent } from './user-loan-form-unrouted.component';

describe('UserLoanFormUnroutedComponent', () => {
  let component: UserLoanFormUnroutedComponent;
  let fixture: ComponentFixture<UserLoanFormUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoanFormUnroutedComponent]
    });
    fixture = TestBed.createComponent(UserLoanFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
