import { TestBed } from '@angular/core/testing';

import { CzaspracyService } from './czaspracy.service';

describe('CzaspracyService', () => {
  let service: CzaspracyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CzaspracyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
