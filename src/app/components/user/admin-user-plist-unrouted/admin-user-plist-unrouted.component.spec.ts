import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserPlistUnroutedComponent } from './admin-user-plist-unrouted.component';

describe('AdminUserPlistUnroutedComponent', () => {
  let component: AdminUserPlistUnroutedComponent;
  let fixture: ComponentFixture<AdminUserPlistUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserPlistUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminUserPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
