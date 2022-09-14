import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  @Input() id_person : number = 0
  @Input() first_name : string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
