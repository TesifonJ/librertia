import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookPlistUnroutedComponent } from './user-book-plist-unrouted.component';

describe('UserBookPlistUnroutedComponent', () => {
  let component: UserBookPlistUnroutedComponent;
  let fixture: ComponentFixture<UserBookPlistUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookPlistUnroutedComponent]
    });
    fixture = TestBed.createComponent(UserBookPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
