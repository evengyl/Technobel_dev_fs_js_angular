import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemediationService {

  isConnect : boolean = false

  constructor() {
    console.log("Service Remediation chargé !")
  }

  login(){
    this.isConnect = true
    return this.isConnect
  }

  register(){
    return this.login()
  }

  logout(){
    this.isConnect = false
    return this.isConnect
  }


  getPoke(){
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0", {
      method : "GET"
    })
  }
}
