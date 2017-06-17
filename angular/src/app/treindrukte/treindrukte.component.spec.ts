import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreindrukteComponent } from './treindrukte.component';

describe('TreindrukteComponent', () => {
  let component: TreindrukteComponent;
  let fixture: ComponentFixture<TreindrukteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreindrukteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreindrukteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
