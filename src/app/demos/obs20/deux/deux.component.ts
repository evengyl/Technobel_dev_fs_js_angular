import { Component, OnInit } from '@angular/core';
import { FakeLoginOBSService } from '../fakeLoginOBS.service';

@Component({
  selector: 'app-deux',
  templateUrl: './deux.component.html'
})
export class DeuxComponent implements OnInit {
  
  isConnect : boolean = false

  constructor(private fakeLoginObsServe : FakeLoginOBSService) { }

  ngOnInit(): void {
    this.fakeLoginObsServe.$isConnect.subscribe((isConnect : boolean) => {
      console.log("next emit !")
      this.isConnect = isConnect
    })
  }

  

}
