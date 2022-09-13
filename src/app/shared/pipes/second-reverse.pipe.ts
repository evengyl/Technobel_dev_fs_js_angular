import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondReverse'
})
export class SecondReversePipe implements PipeTransform {

  transform(value: number | undefined, ...args: unknown[]): string {

    let strFinal = ""
    
    if(value != undefined)
    {
      strFinal = value.toString().split('').reverse().join("")
    }
    else
    {
      strFinal = "Non reconnu..."
    }
    
       
    return strFinal;
  }

}
