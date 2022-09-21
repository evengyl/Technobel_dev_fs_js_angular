import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshPromiseDemo13Service {

  private _varTestAsync : number = 0

  //pour Thomas
  public get varTestAsync(){
    return this._varTestAsync
  }

  private set varTestAsync(e){
    this._varTestAsync = e
  }


  constructor() {

  }


  simplePromise() : void{
    new Promise((resolve, reject) => {

      for(let i = 0 ; i < 100; i++)
      {
        
        if(this.varTestAsync == 42)
        {
          resolve(["Promesse executée avec succès", true, "tutu", "ok", 42])
          break;
        }

        this.varTestAsync ++
      }

      reject("Promesse non terminée")
    })
    .then((result) =>{
      console.log(result)
      console.log("ok j'ai réussi ma promesse")
    })
    .catch((error) => {
      console.log(error)
      console.log("nok je n'ai pas réussi la promesse il y a eu une erreur !!!")
    })
  }


  returnedSimplePromise() : Promise<string>{
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        
        resolve("Promesse executée avec succès")
        
      }, 1500);
    })

    // let promise = new Promise<string>((resolve, reject) => {

    //   setTimeout(() => {
        
    //     resolve("Promesse executée avec succès")
        
    //   }, 1500);
    // })

    // return promise
  }

  //tout ou rien!  considéré comme une porte AND
  returnPromiseAll() : Promise<string[]>{

    let promise1 = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolve promise 1 for Promise.all")
      }, 1500);
    })

    let promise2 = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        //resolve("Resolve promise 2 for Promise.all")
        reject("Reject promise 2 for Promise.all")
      }, 2500);
    })

    let promise3 = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolve promise 3 for Promise.all")
      }, 3500);
    })

    return Promise.all([promise1, promise2, promise3])

  }



  //tout peux importe le res
  //renvoi également un status spécifique
  returnPromiseAllSettled() : Promise<any>{

    let promise1 = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolve promise 1 for Promise.allSettled")
      }, 1500);
    })

    let promise2 = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        //resolve("Resolve promise 2 for Promise.allSettled")
        reject("Reject promise 2 for Promise.allSettled")
      }, 2500);
    })

    let promise3 = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolve promise 3 for Promise.allSettled")
      }, 3500);
    })

    return Promise.allSettled([promise1, promise2, promise3])

  }



  //concept de porte OR -> une réussie et on est return !
  returnPromiseRace() : Promise<string>{

    let promise1 = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolve promise 1 for Promise.race")
      }, 1500);
    })

    let promise2 = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolve promise 2 for Promise.race")
        //reject("Reject promise 2 for Promise.race")
      }, 2500);
    })

    let promise3 = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolve promise 3 for Promise.race")
      }, 3500);
    })

    return Promise.race([promise1, promise2, promise3])

  }
}
