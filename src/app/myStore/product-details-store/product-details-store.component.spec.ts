import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductDetailsStoreComponent } from './product-details-store.component';

describe('Product Details Store Component', () => {
  let component: ProductDetailsStoreComponent;
  let fixture: ComponentFixture<ProductDetailsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsStoreComponent ],
      imports : [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait être ok', () => {
    expect(component).toBeTruthy();
  });
});
