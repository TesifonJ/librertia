import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalUserDetailUnroutedComponent } from './normal-user-detail-unrouted.component';

describe('NormalUserDetailUnroutedComponent', () => {
  let component: NormalUserDetailUnroutedComponent;
  let fixture: ComponentFixture<NormalUserDetailUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalUserDetailUnroutedComponent]
    });
    fixture = TestBed.createComponent(NormalUserDetailUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
