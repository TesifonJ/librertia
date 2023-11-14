import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDetailUnroutedComponent } from './admin-user-detail-unrouted.component';

describe('AdminUserDetailUnroutedComponent', () => {
  let component: AdminUserDetailUnroutedComponent;
  let fixture: ComponentFixture<AdminUserDetailUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserDetailUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminUserDetailUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
