import { TestBed } from '@angular/core/testing';

import { NetconfLibService } from './netconf-lib.service';

describe('NetconfLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetconfLibService = TestBed.get(NetconfLibService);
    expect(service).toBeTruthy();
  });
});
