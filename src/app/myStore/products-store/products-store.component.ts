import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../shared/models/IProduct.model';
import { ProductMyStoreService } from '../shared/services/product-my-store.service';

@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html'
})
export class ProductsStoreComponent implements OnInit {

  listProduct : IProduct[] = []

  constructor(private productServe : ProductMyStoreService, private activetedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((params : any) => {
      this.getData(params["idCateg"])
    })

  }

  async getData(idCateg : number){
    try{
      let tmp : IProduct[] = await this.productServe.getData()
      this.listProduct = tmp.filter(product => product.categId == idCateg)
    }
    catch(error){
      console.log(error)
    }
  }


  navigateToDetails(productId : number){

    console.log(this.router.url)
    this.router.navigate([this.router.url, "product", productId])
    //categ/:idCateg/product/:idProd
  }

}
