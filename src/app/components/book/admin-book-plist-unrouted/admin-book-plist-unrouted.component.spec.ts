import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookPlistUnroutedComponent } from './admin-book-plist-unrouted.component';

describe('AdminBookPlistUnroutedComponent', () => {
  let component: AdminBookPlistUnroutedComponent;
  let fixture: ComponentFixture<AdminBookPlistUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookPlistUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminBookPlistUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
