import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltervertrektijdenComponent } from './filtervertrektijden.component';

describe('FiltervertrektijdenComponent', () => {
  let component: FiltervertrektijdenComponent;
  let fixture: ComponentFixture<FiltervertrektijdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltervertrektijdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltervertrektijdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
