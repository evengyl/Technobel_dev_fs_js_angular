import { TestBed } from '@angular/core/testing';

import { ProductMyStoreService } from './product-my-store.service';

describe('Product My Store Service', () => {
  let service: ProductMyStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductMyStoreService);
  });

  it('Devrait être ok', () => {
    expect(service).toBeTruthy();
  });
});
