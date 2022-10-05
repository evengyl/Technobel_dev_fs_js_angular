import { Injectable } from "@angular/core";
import { BehaviorSubject, concatMap, concatWith, map, mergeMap, Observable, switchMap } from "rxjs";

@Injectable({
    providedIn : "root"
})
export class FakeProductsOBSService{
    
    private productList : Product[] = [
        { id : 1, name : "iphone 13", priceNet : 800},
        { id : 2, name : "iphone 14", priceNet : 1600},
        { id : 3, name : "iphone 15", priceNet : 3200},
        { id : 4, name : "iphone 16", priceNet : 6400},
        { id : 5, name : "iphone 17", priceNet : 12800},
        { id : 6, name : "iphone 18", priceNet : 25600},
    ]


    private user : User = {
        id : 42,
        name : "Jawad",
        tauxTVA : 12,
        remise : 2.5
    }

    
    constructor(){}


    getProductList()
    {
        return this.httpC_get()
        .pipe(
            map((productList) => {

                productList.map((product) => {
                    let prixRemise = product.priceNet * ((this.user.remise / 100)) + 1
                    product.priceNet = (product.priceNet * ((this.user.tauxTVA /100) + 1)) - prixRemise
                    product.priceNet = Number.parseFloat(product.priceNet.toFixed(2))
                    return product
                })
                return productList         
            })
        )
    }


    httpC_get() : Observable<Product[]>{
        return new Observable((obs) => {
            obs.next(this.productList)
        })
    }


    
}




class Product{
    id : number = 0
    name : string = ""
    priceNet : number = 0
}

class User{
    id : number = 0
    name : string = "NC"
    tauxTVA : number = 21
    remise : number = 0
}

