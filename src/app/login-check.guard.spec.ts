import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginCheckGuard } from './login-check.guard';

describe('loginCheckGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginCheckGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
