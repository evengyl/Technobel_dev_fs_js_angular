import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuralsdirectives8',
  templateUrl: './structuralsdirectives8.component.html'
})
export class Structuralsdirectives8Component implements OnInit {

  opened : boolean = false
  datasList : string[] = ["pommes", "poires", "bananes", "oranges"]
  userList : { name : string, role : string}[] = [
    { name : "Loic", role : "admin"},
    { name : "Dorian", role : "modo"},
    { name : "Camille", role : "casu"},
    { name : "Nicolas", role : "casu"},
    { name : "David", role : "casu"}
  ] 

  product : {} = { name : "Un truc", price : 15, desc : "tutu"}

  constructor() { }

  ngOnInit(): void {
  }

  triggerParagraph()
  {
    this.opened = !this.opened
  }

}
