/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserBookFeaturedUnroutedComponent } from './user-book-featured-unrouted.component';

describe('UserBookFeaturedUnroutedComponent', () => {
  let component: UserBookFeaturedUnroutedComponent;
  let fixture: ComponentFixture<UserBookFeaturedUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookFeaturedUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookFeaturedUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
