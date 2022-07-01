import { TestBed } from '@angular/core/testing';

import { LoggedoutService } from './loggedout.service';

describe('LoggedoutService', () => {
  let service: LoggedoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
