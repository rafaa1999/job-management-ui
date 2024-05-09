import { TestBed } from '@angular/core/testing';

import { FicilityService } from './ficility.service';

describe('FicilityService', () => {
  let service: FicilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
