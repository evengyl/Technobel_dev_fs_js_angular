import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/shared/services/poke-api.service';

@Component({
  selector: 'app-http-client15',
  templateUrl: './http-client15.component.html'
})
export class HttpClient15Component implements OnInit {

  listPoke : {name : string, url : string}[] = []

  pokeDetails : {
    name : string,
    type : any[],
    stat : any[]
  } = {
    name : "",
    type : [],
    stat : []
  }

  constructor(private pokeApiService : PokeApiService) { }

  ngOnInit(): void {

    this.pokeApiService.getAll().subscribe((res : any) => {
      console.log(res)

      this.listPoke = res.results
    })
  }


  goDetailsPoke(pokeUrl : string){
    this.pokeApiService.getOne(pokeUrl).subscribe((res : any) => {
      this.pokeDetails.name = res.name
      this.pokeDetails.type = res.types
      this.pokeDetails.stat = res.stats
    })
  }

}
