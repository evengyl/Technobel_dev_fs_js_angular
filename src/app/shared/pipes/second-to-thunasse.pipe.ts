import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondToThunasse'
})
export class SecondToThunassePipe implements PipeTransform {

  //args[0] -> currency en str 3 lettres (USD, RUB, JPY)
  transform(value: number | undefined, ...args: unknown[]): string {

    let strFinal = ""
    let taux_EUR_USD = 1.014
    let taux_EUR_RUB = 61.73
    let taux_EUR_JPY = 144.36
    
    if(value != undefined)
    {
      if(args[0] == "USD")
        strFinal = (value * taux_EUR_USD).toString()

      if(args[0] == "RUB")
        strFinal = (value * taux_EUR_RUB).toString()

      if(args[0] == "JPY")
        strFinal = (value * taux_EUR_JPY).toString()
    }
    else
    {
      strFinal = "Non reconnu..."
    }
    
       
    return strFinal;
  }

}
