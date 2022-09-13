import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondToHumanTime'
})
export class SecondToHumanTimePipe implements PipeTransform {

  transform(value: number | undefined, ...args: unknown[]): string {

    let strFinal = ""
    
    if(value != undefined)
    {
      if(value >= 1)
      {
        //partie algo math
        let days = Math.floor(value / 86400)
        value = value - (days * 86400)

        let hours = Math.floor(value / 3600)
        value = value - (hours * 3600)

        let minutes = Math.floor(value / 60)
        value = value - (minutes * 60)
        
        let seconds = value


        //partie stringify
        let daysSTR = days.toString()
        let nameDays = "Jour"
        if(days > 1) nameDays = "Jours"

        let hoursSTR = hours.toString()
        let nameHours = "Heure"
        if(hours < 10) hoursSTR = "0" + hoursSTR
        if(hours > 1) nameHours = "Heures"

        let minutesSTR = minutes.toString()
        let nameMinutes = "Minute"
        if(minutes < 10) minutesSTR = "0" + minutesSTR
        if(minutes > 1) nameMinutes = "Minutes"

        let secondsSTR = seconds.toString()
        let nameSeconds = "Seconde"
        if(seconds < 10) secondsSTR = "0" + secondsSTR
        if(seconds > 1) nameSeconds = "Secondes"


        strFinal = `${daysSTR} ${nameDays} -
        ${hoursSTR} ${nameHours} - 
        ${minutesSTR} ${nameMinutes} et 
        ${secondsSTR} ${nameSeconds}`
      
      }
    }
    else
    {
      strFinal = "Non reconnu..."
    }
    
    
    
    
    return strFinal;
  }

}
