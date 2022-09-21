import { Component, OnInit } from '@angular/core';
import { RefreshPromiseDemo13Service } from 'src/app/shared/services/refresh-promise-demo13.service';

@Component({
  selector: 'app-refresh-promise13',
  templateUrl: './refresh-promise13.component.html'
})
export class RefreshPromise13Component implements OnInit {

  messageServe : string = ""

  constructor(private refreshPromiseServ : RefreshPromiseDemo13Service) {  }

  ngOnInit(): void {
    this.refreshPromiseServ.simplePromise()

    this.refreshPromiseServ.returnedSimplePromise()
    .then((res : string) => {

      this.messageServe = res

    })
    .catch((error : any) => {
      //
    })



    this.refreshPromiseServ.returnPromiseAll()
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })


    this.refreshPromiseServ.returnPromiseAllSettled()
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })



    this.refreshPromiseServ.returnPromiseRace()
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  }

}
