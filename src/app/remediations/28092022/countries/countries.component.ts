import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {

  //modèle de any, car on a pas de modèle spécifique à utiliser, et je dois init le tableau ! (typescript strict mode oblige...)
  listCountries : any[] = []

  //tout comme, tous nos services, les modules HttpClient, Router, ActivatedRoute -> sont des injectable natif à Angular
  constructor(private countriesServe : CountriesService, private router : Router) { }

  ngOnInit(): void {
    //on veux aller chercher les noms des pays au démarrage du compo ! donc on le fait dans le NgonInit
    // petite astuce sur les Observable, elle ne se lancera pas (.get()) si on à pas au moins ! un .subscribe dessus !
    //normal -> on imagine que personne ne va aller chercher des infos que personne ne veux utilisé
    //on s'y subscribe et on devient un observer de cet observable
    this.countriesServe.getAllNameCountries().subscribe((allDatas : any) => {
      this.listCountries = allDatas
      //j'ai créer ma méthode à utilisé lors de l'inscription à cet observable
      // j'ai déclencher une lambda fléchée classique et mon subscribe m'a donner ce que j'attend ic , all datas

    })
  }


  goToDetails(ccn3 : number){
    let currentUrl = this.router.url //me donne l'url courante !

    //lors du clic sur un des pays, j'ai envoyer son code ccn3 récupérer dans l'api !
    //dans angular, quand on veux faire de la navigation en dehors des appel de routage, on va utiliser l'inject de router
    //pour accéder à des méthodes, dont navigate, qui prends un array de mot clé, pour elle construire son url !
    this.router.navigate([currentUrl, ccn3, "details"])

    
    //je veux que ma navigation donne ceci
    // -> /rem/nav_api/countries/{{ccn3}}/details
  }

}
