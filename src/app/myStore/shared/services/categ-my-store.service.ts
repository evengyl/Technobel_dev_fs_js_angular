import { Injectable } from '@angular/core';
import { Categ } from '../models/Categ.model';
import { ICateg } from '../models/ICateg.model';

@Injectable({
  providedIn: 'root'
})
export class CategMyStoreService {


  constructor() {

    
  }


  getData() : Promise<ICateg[]>{
    return new Promise((resolve, reject) => {
      
      let listCateg : ICateg[] = []
      setTimeout(() => {
        listCateg = [
          { name : "Smartphone", id : 1, desc : "Voili Voilou les toutou qui achète des Iphon à 2k euros..."},
          { name : "Ordi portable", id : 2, desc : "Voili Voilou les toutou qui achète des MacBook à 4k euros..."},
          { name : "Ordi Fixe", id : 3, desc : "Voili Voilou les toutou qui achète des Mac à 20k euros..."},
          { name : "Matériel Gamer", id : 4, desc : "Comme si ça existait..."}
        ]
  
        resolve(listCateg)
      }, 300);
      
    })
    //totalement INUTILE mais marrant... :) - Loïc 2022 Bstorm LOL...
  }
}
