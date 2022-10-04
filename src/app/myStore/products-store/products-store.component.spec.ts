import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing"

import { ProductsStoreComponent } from './products-store.component';

describe('Products Store Component', () => {
  let component: ProductsStoreComponent;
  let fixture: ComponentFixture<ProductsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsStoreComponent ],
      imports : [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait être ok', () => {
    expect(component).toBeTruthy();
  });
});
