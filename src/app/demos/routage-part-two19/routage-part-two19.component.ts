import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routage-part-two19',
  templateUrl: './routage-part-two19.component.html'
})
export class RoutagePartTwo19Component implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot)
  }

}
