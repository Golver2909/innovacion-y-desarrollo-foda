import { TestBed } from '@angular/core/testing';

import { Consignaservice } from './consigna';

describe('Consigna', () => {
  let service: Consignaservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consignaservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
