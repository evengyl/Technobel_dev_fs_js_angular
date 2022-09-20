import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeLoginService {

  isConnect : boolean = false
  
  constructor() { }


  login(){
    this.isConnect = true
  }

  register(){
    this.login()
  }

  logout(){
    this.isConnect = false
  }
}
