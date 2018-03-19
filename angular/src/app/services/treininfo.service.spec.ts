import { TestBed, inject } from '@angular/core/testing';

import { TreininfoService } from './treininfo.service';

describe('TreininfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreininfoService]
    });
  });

  it('should be created', inject([TreininfoService], (service: TreininfoService) => {
    expect(service).toBeTruthy();
  }));
});
