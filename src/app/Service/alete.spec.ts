import { TestBed } from '@angular/core/testing';
import { Alete } from './alete';

describe('Alete', () => {
  let service: Alete;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Alete);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
