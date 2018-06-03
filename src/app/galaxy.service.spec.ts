import { TestBed, inject } from '@angular/core/testing';

import { GalaxyService } from './galaxy.service';

describe('GalaxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalaxyService]
    });
  });

  it('should be created', inject([GalaxyService], (service: GalaxyService) => {
    expect(service).toBeTruthy();
  }));
});
