import { TestBed, inject } from '@angular/core/testing';

import { VertrektijdService } from './vertrektijd.service';

describe('VertrektijdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VertrektijdService]
    });
  });

  it('should be created', inject([VertrektijdService], (service: VertrektijdService) => {
    expect(service).toBeTruthy();
  }));
});
