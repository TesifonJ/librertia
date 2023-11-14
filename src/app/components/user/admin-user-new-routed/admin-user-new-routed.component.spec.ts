import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserNewRoutedComponent } from './admin-user-new-routed.component';

describe('AdminUserNewRoutedComponent', () => {
  let component: AdminUserNewRoutedComponent;
  let fixture: ComponentFixture<AdminUserNewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserNewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminUserNewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
