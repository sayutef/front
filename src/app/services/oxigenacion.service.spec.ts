import { TestBed } from '@angular/core/testing';

import { OxigenacionService } from './oxigenacion.service';

describe('OxigenacionService', () => {
  let service: OxigenacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OxigenacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
