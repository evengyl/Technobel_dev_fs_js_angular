import { Component, OnInit } from '@angular/core';
import { datas } from '../datas'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  listPerson : { id : number, first_name : string}[] = datas

  constructor() {
  }

  ngOnInit(): void {
  }

}
