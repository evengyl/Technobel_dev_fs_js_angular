import { Component, OnInit } from '@angular/core';
import { RefreshAsyncAwaitDemo14Service } from 'src/app/shared/services/refresh-async-await-demo14.service';
import { RefreshPromiseDemo13Service } from 'src/app/shared/services/refresh-promise-demo13.service';

@Component({
  selector: 'app-async-await14',
  templateUrl: './async-await14.component.html'
})
export class AsyncAwait14Component implements OnInit {

  text : string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem perspiciatis illo laborum doloremque architecto assumenda cum, commodi id, veritatis eius cumque molestias eum saepe odit. Beatae labore blanditiis qui nesciunt."
  message : string = ""

  constructor(
    private refreshAAServe : RefreshAsyncAwaitDemo14Service,
    private refreshPromise : RefreshPromiseDemo13Service
  ) { }

  async ngOnInit() {
    
    console.log("1")
    let result = await this.refreshAAServe.transformText(this.text)
    this.text = result.transformText
    this.message = result.message

    console.log("2")
    let result2 = await this.refreshPromise.returnedSimplePromise()
    
    
    console.log("3")
    try{
      let result3 = await this.refreshPromise.returnPromiseAll()
    }
    catch(error){
      console.log(error)
    }
    finally{
      console.log("Ok la suite... (l'erreur qui aurais pu être lancée à été capturée)")
    }

    

    console.log("4")
    let result4 = await this.refreshPromise.returnPromiseAllSettled()

    console.log("5")
    let result5 = await this.refreshPromise.returnPromiseRace()


    console.log("6")

  }

}
