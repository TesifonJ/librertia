import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRoutedComponent } from './login-routed.component';

describe('LoginRoutedComponent', () => {
  let component: LoginRoutedComponent;
  let fixture: ComponentFixture<LoginRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRoutedComponent]
    });
    fixture = TestBed.createComponent(LoginRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
