import { TestBed } from '@angular/core/testing';

import { SoapServiceTestService } from './soap-service-test.service';

describe('SoapServiceTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoapServiceTestService = TestBed.get(SoapServiceTestService);
    expect(service).toBeTruthy();
  });
});
