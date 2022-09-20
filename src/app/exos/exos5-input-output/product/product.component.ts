import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../cart/cart.component';

/* l'enfant de cart ! */
@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  @Input() styleChild : string = ""
  @Input() productChild : IProduct = {id:0, name:""}
  /*
    [styleChild]="style"
    [productChild]="product"*/


  @Output() deleteProductItem : EventEmitter<number> = new EventEmitter<number>()


  constructor() { }

  ngOnInit(): void {
  }

  //on devrais utiliser this.productChild.id, instance de product ! au leiu de passer l'id en param d'un event
  //mais par soucis de relecture on fait comme tel
  deleteProduct(idProduct : number){
    this.deleteProductItem.emit(idProduct)
  }

}
