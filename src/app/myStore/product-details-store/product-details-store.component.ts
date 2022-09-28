import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../shared/models/IProduct.model';
import { Product } from '../shared/models/Product.model';
import { ProductMyStoreService } from '../shared/services/product-my-store.service';

@Component({
  selector: 'app-product-details-store',
  templateUrl: './product-details-store.component.html'
})
export class ProductDetailsStoreComponent implements OnInit {

  product : IProduct = new Product()

  constructor(private productServe : ProductMyStoreService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let idProd = this.activatedRoute.params.subscribe((params: any) => {

      this.getData(params.idProd)
    })
  }

  async getData(idProd : number){
    try{
      this.product = await this.productServe.getOneById(idProd)
    }
    catch(error){
      console.log(error)
    }
  }

}
