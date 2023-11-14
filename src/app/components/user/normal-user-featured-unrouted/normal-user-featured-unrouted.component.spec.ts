import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalUserFeaturedUnroutedComponent } from './normal-user-featured-unrouted.component';

describe('NormalUserFeaturedUnroutedComponent', () => {
  let component: NormalUserFeaturedUnroutedComponent;
  let fixture: ComponentFixture<NormalUserFeaturedUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalUserFeaturedUnroutedComponent]
    });
    fixture = TestBed.createComponent(NormalUserFeaturedUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
