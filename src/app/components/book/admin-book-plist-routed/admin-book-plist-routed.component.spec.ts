import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookPlistRoutedComponent } from './admin-book-plist-routed.component';

describe('AdminBookPlistRoutedComponent', () => {
  let component: AdminBookPlistRoutedComponent;
  let fixture: ComponentFixture<AdminBookPlistRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookPlistRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminBookPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
