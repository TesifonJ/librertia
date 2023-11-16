import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookFormUnroutedComponent } from './admin-book-form-unrouted.component';

describe('AdminBookFormUnroutedComponent', () => {
  let component: AdminBookFormUnroutedComponent;
  let fixture: ComponentFixture<AdminBookFormUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookFormUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminBookFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
