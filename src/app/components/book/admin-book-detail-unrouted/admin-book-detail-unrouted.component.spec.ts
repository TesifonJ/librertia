import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookDetailUnroutedComponent } from './admin-book-detail-unrouted.component';

describe('AdminBookDetailUnroutedComponent', () => {
  let component: AdminBookDetailUnroutedComponent;
  let fixture: ComponentFixture<AdminBookDetailUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookDetailUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminBookDetailUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
