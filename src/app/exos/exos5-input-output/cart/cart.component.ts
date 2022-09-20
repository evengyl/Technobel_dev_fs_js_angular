import { Component, OnInit } from '@angular/core';

/* parent ayant des enfant product */
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  listProduct : IProduct[] = []
  style : string = "font-weigth:bold;"

  constructor() {
    let newProd : IProduct = { id : 1, name : "Apple 14" }
    this.listProduct.push({...newProd})

    newProd.id = 2
    newProd.name = "Kevin Baccon"
    this.listProduct.push({...newProd})


    newProd.id = 3
    newProd.name = "Le lotus noir"
    this.listProduct.push({...newProd})
  }

  ngOnInit(): void {
  }

  clickDelete(idToDelete : number){
    let indexProductToDelete = this.listProduct.findIndex(product => product.id == idToDelete)
    this.listProduct.splice(indexProductToDelete, 1)
  }

}


export interface IProduct{
  id : number
  name : string
}
