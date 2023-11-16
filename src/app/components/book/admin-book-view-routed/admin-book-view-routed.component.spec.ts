import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookViewRoutedComponent } from './admin-book-view-routed.component';

describe('AdminBookViewRoutedComponent', () => {
  let component: AdminBookViewRoutedComponent;
  let fixture: ComponentFixture<AdminBookViewRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookViewRoutedComponent]
    });
    fixture = TestBed.createComponent(AdminBookViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
