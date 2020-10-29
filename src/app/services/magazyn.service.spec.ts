import { TestBed } from '@angular/core/testing';

import { MagazynService } from './magazyn.service';

describe('MagazynService', () => {
  let service: MagazynService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagazynService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
