import { TestBed } from '@angular/core/testing';

import { ProceduryService } from './procedury.service';

describe('ProceduryService', () => {
  let service: ProceduryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceduryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
