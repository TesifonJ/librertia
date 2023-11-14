import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutRoutedComponent } from './logout-routed.component';

describe('LogoutRoutedComponent', () => {
  let component: LogoutRoutedComponent;
  let fixture: ComponentFixture<LogoutRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutRoutedComponent]
    });
    fixture = TestBed.createComponent(LogoutRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
