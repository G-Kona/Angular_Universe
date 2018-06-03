import { TestBed, inject } from '@angular/core/testing';

import { SolarsystemService } from './solarsystem.service';

describe('SolarsystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolarsystemService]
    });
  });

  it('should be created', inject([SolarsystemService], (service: SolarsystemService) => {
    expect(service).toBeTruthy();
  }));
});
