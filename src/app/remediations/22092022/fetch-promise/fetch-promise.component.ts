import { Component, OnInit } from '@angular/core';
import { RemediationService } from '../remediation.service';

@Component({
  selector: 'app-fetch-promise',
  templateUrl: './fetch-promise.component.html'
})
export class FetchPromiseComponent implements OnInit {

  isConnect : boolean = false
  listPoke : any = null
  constructor(private remServe : RemediationService) { }

  ngOnInit(): void {
    this.isConnect = this.remServe.isConnect

    if(this.isConnect){
      this.remServe.getPoke()
      .then((res : Response) => {
        return res.json()
      })
      .then((datas) => {
        this.listPoke = datas.results
      })
      .catch((error) => {
        alert("Une erreur s'est produite")
      })
    }
  }





}
