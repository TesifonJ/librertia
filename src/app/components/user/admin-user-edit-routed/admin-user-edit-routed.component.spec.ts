import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserEditRoutedComponent } from './admin-user-edit-routed.component';

describe('AdminUserEditRoutedComponent', () => {
  let component: AdminUserEditRoutedComponent;
  let fixture: ComponentFixture<AdminUserEditRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserEditRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminUserEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
