import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookDetailUnroutedComponent } from './user-book-detail-unrouted.component';

describe('UserBookDetailUnroutedComponent', () => {
  let component: UserBookDetailUnroutedComponent;
  let fixture: ComponentFixture<UserBookDetailUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookDetailUnroutedComponent]
    });
    fixture = TestBed.createComponent(UserBookDetailUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
