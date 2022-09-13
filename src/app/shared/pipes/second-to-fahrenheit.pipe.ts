import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondToFahrenheit'
})
export class SecondToFahrenheitPipe implements PipeTransform {

  transform(value: number | undefined, ...args: unknown[]): string {

    let strFinal = ""
    
    if(value != undefined)
    {
      if(value >= 1)
      {
        let res = (value * (9/5)) + 32
        strFinal = "Il fait : " + res + " °F"
      }
    }
    else
    {
      strFinal = "Non reconnu..."
    }
    
       
    return strFinal;
  }

}
