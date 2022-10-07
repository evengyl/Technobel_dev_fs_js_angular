import { Component, OnInit } from '@angular/core';
import { FakeLoginOBSService } from '../fakeLoginOBS.service';
import { FakeProductsOBSService } from '../fakeProductsOBS.service';

@Component({
  selector: 'app-trois',
  templateUrl: './trois.component.html'
})
export class TroisComponent implements OnInit {

  isConnect : boolean = false


  constructor(
    private fakeLoginObsServe : FakeLoginOBSService,
    private fakeProdObsServe : FakeProductsOBSService
  ) { }

  ngOnInit(): void {
    this.fakeLoginObsServe.$isConnect.subscribe((isConnect : boolean) => {
      this.isConnect = isConnect

      this.fakeProdObsServe.getLetter().subscribe((res) => {
        //console.log(res)
        // ( MERGEMAP )
      })

      this.fakeProdObsServe.getCountry().subscribe((res) => {
        //console.log(res)
        //( ZIP )
      })

      this.fakeProdObsServe.getTemp().subscribe((res) => {
        //console.log(res)
      })


    


    })
  }

  

}
