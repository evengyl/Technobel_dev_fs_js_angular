import { Component, OnInit } from '@angular/core';
import { FakeLoginOBSService } from '../fakeLoginOBS.service';
import { FakeProductsOBSService } from '../fakeProductsOBS.service';

@Component({
  selector: 'app-deux',
  templateUrl: './deux.component.html'
})
export class DeuxComponent implements OnInit {
  
  isConnect : boolean = false
  listProduct : any[] = []

  constructor(
    private fakeLoginObsServe : FakeLoginOBSService,
    private fakeProdObsServe : FakeProductsOBSService
  ) { }

  ngOnInit(): void {
    this.fakeLoginObsServe.$isConnect.subscribe((isConnect : boolean) => {
      this.isConnect = isConnect


      if(this.isConnect == true)
      {
        this.fakeProdObsServe.getProductList().subscribe((listProduct : any) => {
          this.listProduct = listProduct
        })
      }

    })
  }

  

}
