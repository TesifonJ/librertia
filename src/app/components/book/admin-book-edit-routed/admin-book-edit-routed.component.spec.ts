import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookEditRoutedComponent } from './admin-book-edit-routed.component';

describe('AdminBookEditRoutedComponent', () => {
  let component: AdminBookEditRoutedComponent;
  let fixture: ComponentFixture<AdminBookEditRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookEditRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminBookEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
