import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookSelectionUnroutedComponent } from './admin-book-selection-unrouted.component';

describe('AdminBookSelectionUnroutedComponent', () => {
  let component: AdminBookSelectionUnroutedComponent;
  let fixture: ComponentFixture<AdminBookSelectionUnroutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookSelectionUnroutedComponent]
    });
    fixture = TestBed.createComponent(AdminBookSelectionUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
