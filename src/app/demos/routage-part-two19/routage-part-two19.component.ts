import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routage-part-two19',
  templateUrl: './routage-part-two19.component.html'
})
export class RoutagePartTwo19Component implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateCateg(){
    this.router.navigate(["categ"])
  }

  navigateListProducts(){
    this.router.navigate(["categ", 12, "product"])
  }


  navigateProduct(){
    this.router.navigate(["categ", this.activatedRoute.snapshot.params["idCateg"], "product", 14259])
  }


  navigateProductDetails(){
    this.router.navigate(["categ", this.activatedRoute.snapshot.params["idCateg"], 
                        "product", this.activatedRoute.snapshot.params["idProduct"], "details"])
  }


  navigateProductDetailsWithQueryParams(){
    this.router.navigate([
      "categ",
      this.activatedRoute.snapshot.params["idCateg"], 
      "product", 
      this.activatedRoute.snapshot.params["idProduct"], 
      "details"], { queryParams : {"order" : "desc", "limit" : "25"}})

  }

  finalityUrl(){
    console.log(this.activatedRoute.snapshot)
  }
}
