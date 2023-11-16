import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoanPlistUnroutedComponent } from './user-loan-plist-unrouted.component';

describe('UserLoanPlistUnroutedComponent', () => {
  let component: UserLoanPlistUnroutedComponent;
  let fixture: ComponentFixture<UserLoanPlistUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoanPlistUnroutedComponent]
    });
    fixture = TestBed.createComponent(UserLoanPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
