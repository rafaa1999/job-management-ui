import { TestBed } from '@angular/core/testing';

import { CarParkService } from './car-park.service';

describe('CarParkService', () => {
  let service: CarParkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarParkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
