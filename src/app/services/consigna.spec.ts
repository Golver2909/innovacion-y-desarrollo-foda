import { TestBed } from '@angular/core/testing';

import { Consigna } from './consigna';

describe('Consigna', () => {
  let service: Consigna;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consigna);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
