import { TestBed, inject } from '@angular/core/testing';

import { TreindrukteService } from './treindrukte.service';

describe('TreindrukteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreindrukteService]
    });
  });

  it('should be created', inject([TreindrukteService], (service: TreindrukteService) => {
    expect(service).toBeTruthy();
  }));
});
