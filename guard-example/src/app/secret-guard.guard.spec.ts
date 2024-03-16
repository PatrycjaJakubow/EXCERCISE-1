import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { secretGuardGuard } from './secret-guard.guard';

describe('secretGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secretGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
