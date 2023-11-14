import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserViewRoutedComponent } from './admin-user-view-routed.component';

describe('AdminUserViewRoutedComponent', () => {
  let component: AdminUserViewRoutedComponent;
  let fixture: ComponentFixture<AdminUserViewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserViewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminUserViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
