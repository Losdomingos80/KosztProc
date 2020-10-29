import { TestBed } from '@angular/core/testing';

import { SlownikiService } from './slowniki.service';

describe('SlownikiService', () => {
  let service: SlownikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlownikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
