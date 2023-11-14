import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUnroutedComponent } from './footer-unrouted.component';

describe('FooterUnroutedComponent', () => {
  let component: FooterUnroutedComponent;
  let fixture: ComponentFixture<FooterUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterUnroutedComponent]
    });
    fixture = TestBed.createComponent(FooterUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
