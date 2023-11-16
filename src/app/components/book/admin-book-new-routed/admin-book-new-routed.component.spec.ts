import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookNewRoutedComponent } from './admin-book-new-routed.component';

describe('AdminBookNewRoutedComponent', () => {
  let component: AdminBookNewRoutedComponent;
  let fixture: ComponentFixture<AdminBookNewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookNewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminBookNewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
