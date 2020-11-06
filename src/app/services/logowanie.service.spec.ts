import { TestBed } from '@angular/core/testing';

import { LogowanieService } from './logowanie.service';

describe('LogowanieService', () => {
  let service: LogowanieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogowanieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
