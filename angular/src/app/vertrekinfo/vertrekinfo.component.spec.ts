import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertrekinfoComponent } from './vertrekinfo.component';

describe('VertrekinfoComponent', () => {
  let component: VertrekinfoComponent;
  let fixture: ComponentFixture<VertrekinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertrekinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertrekinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
