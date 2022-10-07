import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FakeLoginOBSService } from '../fakeLoginOBS.service';

@Component({
  selector: 'app-un',
  templateUrl: './un.component.html'
})
export class UnComponent implements OnInit, OnDestroy {

  isConnect : boolean = false
  subIsConnect : Subscription = new Subscription
  subInterval : Subscription = new Subscription


  constructor(private fakeLoginObsServe : FakeLoginOBSService) { }

  ngOnInit(): void {
    console.log("on init")
    
    this.subIsConnect = this.fakeLoginObsServe.$isConnect.subscribe((isConnect : boolean) => {

      console.log("next emit !")
      this.isConnect = isConnect
    })


  }

  ngOnDestroy(): void {
    this.subIsConnect.unsubscribe()
    console.log("on destroy")
  }

  login(){
    this.fakeLoginObsServe.login()
  }

  logout(){
    this.fakeLoginObsServe.logout()
  }






}
