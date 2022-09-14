export class Toast{

    constructor(){}

    static deleteProduct(){
        M.toast({html : "Le produit à été supprimé"})
    }

    static addProduct(){
        M.toast({html : "Le produit à été ajouté"})
    }

}