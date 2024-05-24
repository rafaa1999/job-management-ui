import { TestBed } from '@angular/core/testing';

import { ContingentService } from './contingent.service';

describe('ContingentService', () => {
  let service: ContingentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContingentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
