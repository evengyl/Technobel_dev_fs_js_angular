import { AbstractControl, ValidationErrors } from "@angular/forms";
import { delay, of } from "rxjs";

export function nameValidator(control : AbstractControl){

    let error : ValidationErrors | null = null

    if(control.value == "admin")
    error = { NameValidator : "Violation du mot clé admin"}
        
    else if(control.value == "test")
    error = { NameValidator : "Violation du mot clé test"}

    return error
}