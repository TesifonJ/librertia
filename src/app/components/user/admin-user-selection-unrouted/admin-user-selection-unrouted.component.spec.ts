import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserSelectionUnroutedComponent } from './admin-user-selection-unrouted.component';

describe('AdminUserSelectionUnroutedComponent', () => {
  let component: AdminUserSelectionUnroutedComponent;
  let fixture: ComponentFixture<AdminUserSelectionUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserSelectionUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminUserSelectionUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
