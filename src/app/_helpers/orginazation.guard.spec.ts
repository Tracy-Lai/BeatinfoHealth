import { TestBed } from '@angular/core/testing';

import { OrginazationGuard } from './orginazation.guard';

describe('OrginazationGuard', () => {
  let guard: OrginazationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrginazationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
