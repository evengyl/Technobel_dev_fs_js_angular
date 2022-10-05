import { Component, OnInit } from '@angular/core';
import { FakeLoginOBSService } from '../fakeLoginOBS.service';

@Component({
  selector: 'app-trois',
  templateUrl: './trois.component.html'
})
export class TroisComponent implements OnInit {

  isConnect : boolean = false


  constructor(private fakeLoginObsServe : FakeLoginOBSService) { }

  ngOnInit(): void {
    this.fakeLoginObsServe.$isConnect.subscribe((isConnect : boolean) => {
      this.isConnect = isConnect
    })
  }

  

}
