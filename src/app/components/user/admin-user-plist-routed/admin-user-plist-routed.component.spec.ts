import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserPlistRoutedComponent } from './admin-user-plist-routed.component';

describe('AdminUserPlistRoutedComponent', () => {
  let component: AdminUserPlistRoutedComponent;
  let fixture: ComponentFixture<AdminUserPlistRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserPlistRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminUserPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
