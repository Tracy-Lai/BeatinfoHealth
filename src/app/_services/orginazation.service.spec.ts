import { TestBed } from '@angular/core/testing';

import { OrginazationService } from './orginazation.service';

describe('OrginazationService', () => {
  let service: OrginazationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrginazationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
