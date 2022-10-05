import { Component, OnInit } from '@angular/core';
import { forkJoin, observable, Observable, Observer } from 'rxjs';
import { PokeService } from '../poke.service';

@Component({
  selector: 'app-quatre',
  templateUrl: './quatre.component.html'
})
export class QuatreComponent implements OnInit {

  
  listPoke : any[] = []
  time : any
  testObsAsyncPipe : Observable<any> = new Observable

  constructor(private pokeServe : PokeService) { }

  ngOnInit(): void {
      this.getAllPoke()


      this.time = new Observable<string>((observer) => {
        setInterval(() => 
        {
          observer.next(new Date().toString())
        }, 1000);
      })

      //async pipe//rtemplace de manière DEV !!!!!!!!
      //le then ou le subsrcibe
      // .then(res => console.log(res))
      // .subscribe(res => console.log(res))
    
      this.testObsAsyncPipe = this.pokeServe.getAll()
  }

  getAllPoke(){
    const listPokeWithDetails : Observable<any>[] = []

    this.pokeServe.getAll().subscribe((allPoke : any[]) => {

      allPoke.forEach((poke) => {
        listPokeWithDetails.push(this.pokeServe.getDetails(poke.url))
      })


      forkJoin(listPokeWithDetails).subscribe((res) => {
        console.log(res)
      })

    })
  }

}
