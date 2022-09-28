import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html'
})
export class CountryDetailsComponent implements OnInit {

  country : any = {}

  constructor(private activatedRoute : ActivatedRoute, private countriesServe : CountriesService) { }

  ngOnInit(): void {
    //je m'y inscris, tout ce qui a un rapport avec ce params observer, je dois le mettre dans la lambda !
    //car si le params change on ne sais pas pourquoi, on dois rappeler l'observer !! il en sera informé
    this.activatedRoute.params.subscribe((params : any) => {
      this.countriesServe.getDetailsByCcn3(params.ccn3).subscribe((allDetails : any) => {
        //attention que alldetails, d'apres l'api (toujours vérifier en tapant l'url manuellement dans le navigateur... ça marche, c'est cool)
        //m'a dit qu'elle me donnais un array de 1 éléments, mon fameux pays... donc je récup [0]
        this.country = allDetails[0]
      })
    })
  }

}
