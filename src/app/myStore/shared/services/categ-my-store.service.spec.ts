import { TestBed } from '@angular/core/testing';

import { CategMyStoreService } from './categ-my-store.service';

describe('Categ My Store Service', () => {
  let service: CategMyStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategMyStoreService);
  });

  it('Devrait être ok', () => {
    expect(service).toBeTruthy();
  });
});
