import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductMyStoreService {

  constructor() { }


  getOneById(idProd : number) : Promise<IProduct>{

    return this.getData().then((allDatas) => {
      let tmpArray = allDatas.filter(prod => prod.id == idProd)
      let product = tmpArray[0]
      return product
    })
  }


  getData() : Promise<IProduct[]>{
    return new Promise((resolve, reject) => {
      
      let listProduct : IProduct[] = []
      setTimeout(() => {
        listProduct = [
          { name : "Iphone 13", id : 1, priceU : 600, categId : 1},
          { name : "Iphone 13 Pro", id : 2, priceU : 800, categId : 1},
          { name : "Iphone 13 Pro Max", id : 3, priceU : 1000, categId : 1},
          { name : "MacBook 1", id : 4, priceU : 1200, categId : 2},
          { name : "MacBook 1 Pro", id : 5, priceU : 1500, categId : 2},
          { name : "MacBook 1 Prox Max", id : 6, priceU : 2000, categId : 2},
          { name : "Mac 1", id : 7, priceU : 5000, categId : 3},
          { name : "Mac 1 Pro", id : 8, priceU : 7000, categId : 3},
          { name : "Mac 1 Pro Max", id : 9, priceU : 10000, categId : 3},
          { name : "Clavier Corsair", id : 10, priceU : 75, categId : 4},
          { name : "Souris Corsair", id : 11, priceU : 75, categId : 4},
          { name : "Boitier Corsair", id : 12, priceU :150, categId : 4 }
        ]
  
        resolve(listProduct)
      }, 200);
      
    })
    //totalement INUTILE mais marrant... :) - Loïc 2022 Bstorm LOL...
  }
}
