import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoekstationComponent } from './zoekstation.component';

describe('ZoekstationComponent', () => {
  let component: ZoekstationComponent;
  let fixture: ComponentFixture<ZoekstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoekstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoekstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
