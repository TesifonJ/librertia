import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserFormUnroutedComponent } from './admin-user-form-unrouted.component';

describe('AdminUserFormUnroutedComponent', () => {
  let component: AdminUserFormUnroutedComponent;
  let fixture: ComponentFixture<AdminUserFormUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserFormUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminUserFormUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
