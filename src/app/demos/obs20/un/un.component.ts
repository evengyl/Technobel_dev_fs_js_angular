import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeLoginOBSService } from '../fakeLoginOBS.service';

@Component({
  selector: 'app-un',
  templateUrl: './un.component.html'
})
export class UnComponent implements OnInit {

  isConnect : boolean = false



  constructor(private fakeLoginObsServe : FakeLoginOBSService) { }

  ngOnInit(): void {
    
    this.fakeLoginObsServe.$isConnect.subscribe((isConnect : boolean) => {
      console.log("next emit !")
      this.isConnect = isConnect
    })
  }

  login(){
    this.fakeLoginObsServe.login()
  }

  logout(){
    this.fakeLoginObsServe.logout()
  }






}
