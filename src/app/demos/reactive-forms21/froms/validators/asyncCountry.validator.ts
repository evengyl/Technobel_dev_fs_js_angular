import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { debounceTime, distinctUntilChanged, map, Observable, observable, switchMap, timer } from "rxjs";
export class AsyncCountryValidator{
    static readonly URL : string = "https://restcountries.com/v3.1/all?fields=name"
    public static check(httpC : HttpClient) : AsyncValidatorFn
    {
        return (control : AbstractControl) => {
                return timer(200).pipe(
                    switchMap(_ => httpC.get("https://restcountries.com/v3.1/all?fields=name")
                        .pipe(
                            map((listCountry : any) => {
                                let check = listCountry.find((item : any) =>
                                {
                                    if(item.name.common == control.value)
                                        return item
                                })
                            if(check != undefined)
                                return null
                            return { AsyncCountryValidator : "pays non trouvé" }
                        }),
                    )
                )
            )
        }
    }
}