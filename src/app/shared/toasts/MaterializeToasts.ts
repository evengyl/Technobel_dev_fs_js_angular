export class Toast{

    constructor(){}

    static deleteProduct(){
        M.toast({html : "Le produit à été supprimé"})
    }

    static addProduct(){
        M.toast({html : "Le produit à été ajouté"})
    }

    static copyText(){
        M.toast({html : "Le texte à été copié dans le presse papier"})
    }

    static notLogged(){
        M.toast({html : "Vous devez êtes connecté pour accéder à cette page"})
    }
}