import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRoutedComponent } from './home-routed.component';

describe('HomeRoutedComponent', () => {
  let component: HomeRoutedComponent;
  let fixture: ComponentFixture<HomeRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRoutedComponent]
    });
    fixture = TestBed.createComponent(HomeRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
