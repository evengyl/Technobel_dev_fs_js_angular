import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exos2-customspipes',
  templateUrl: './exos2-customspipes.component.html'
})
export class Exos2CustomspipesComponent implements OnInit {

  nbSecondUser? : number = undefined
  toCurrency? : string = undefined

  constructor() { }

  ngOnInit(): void {
    let elem = document.querySelectorAll('select')
    M.FormSelect.init(elem)
  }

}
