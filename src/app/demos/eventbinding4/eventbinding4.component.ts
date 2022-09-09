import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding4',
  templateUrl: './eventbinding4.component.html'
})
export class Eventbinding4Component implements OnInit {

  nombre : number = 0
  message : string = ""
  keyPressed : any = undefined

  constructor() { }

  ngOnInit(): void {
  }

  incrementNumber(){
    this.nombre++
  }


  chippoteEvent(event : KeyboardEvent, monMessage : string){
    console.log(event.key)
    this.message = event.key
    
  }
}
