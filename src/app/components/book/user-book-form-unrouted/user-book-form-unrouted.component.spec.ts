import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookFormUnroutedComponent } from './user-book-form-unrouted.component';

describe('UserBookFormUnroutedComponent', () => {
  let component: UserBookFormUnroutedComponent;
  let fixture: ComponentFixture<UserBookFormUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookFormUnroutedComponent]
    });
    fixture = TestBed.createComponent(UserBookFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
