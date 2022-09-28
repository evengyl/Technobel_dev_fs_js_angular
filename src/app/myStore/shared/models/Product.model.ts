import { IProduct } from "./IProduct.model";

export class Product implements IProduct{
    id: number = 0
    name: string = "Produit Non Créé"
    priceU: number = 0.0
    categId : number = 0
}