import { Component, OnDestroy, OnInit } from '@angular/core';
import { RemediationService } from '../remediation.service';

@Component({
  selector: 'app-loginrem',
  templateUrl: './loginrem.component.html'
})
export class LoginremComponent implements OnInit, OnDestroy {

  isConnect : boolean = false

  constructor(private remServe : RemediationService) { }

  ngOnInit(): void {

    this.isConnect = this.remServe.isConnect

    console.log("Login - Init")
  }

  ngOnDestroy(): void {
      console.log("Login - Destroy")
  }

  login(){
    this.isConnect = this.remServe.login()
  }

  register(){
    this.isConnect = this.remServe.register()
  }

  logout(){
    this.isConnect = this.remServe.logout()
  }

}

