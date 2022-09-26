import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routage18',
  templateUrl: './routage18.component.html'
})
export class Routage18Component implements OnInit {

  idUsersFakeByUrl : number = 0

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("NG Init Here")
    console.log(this.activatedRoute)

    if(this.activatedRoute.snapshot.params["id"])
      this.idUsersFakeByUrl = Number(this.activatedRoute.snapshot.params["id"])
    
    
      console.log(this.idUsersFakeByUrl)

  }


  navigateToHere()
  {
    this.router.navigate(["/demos/routage/42"]) //param de route, sera gérer par :id dans le router
  }

}
