import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICateg } from '../shared/models/ICateg.model';
import { CategMyStoreService } from '../shared/services/categ-my-store.service';

@Component({
  selector: 'app-categs-store',
  templateUrl: './categs-store.component.html'
})
export class CategsStoreComponent implements OnInit {

  listCateg : ICateg[] = []

  constructor(private categServe : CategMyStoreService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataServe()
  }


  async getDataServe(){
    try{
      this.listCateg = await this.categServe.getData()
    }
    catch(error){
      console.log(error)
    }
  }


  navigateToProductsList(categId : number){
    this.router.navigate([this.router.url, categId])
  }

}
