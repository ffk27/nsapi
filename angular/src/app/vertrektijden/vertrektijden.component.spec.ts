import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertrektijdenComponent } from './vertrektijden.component';

describe('VertrektijdenComponent', () => {
  let component: VertrektijdenComponent;
  let fixture: ComponentFixture<VertrektijdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertrektijdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertrektijdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
