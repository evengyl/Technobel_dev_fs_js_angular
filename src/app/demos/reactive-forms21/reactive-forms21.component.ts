import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateMyForm } from './froms/myForm.form';

@Component({
  selector: 'app-reactive-forms21',
  templateUrl: './reactive-forms21.component.html'
})
export class ReactiveForms21Component implements OnInit {

  myFormValue! : {
    name : string,
    email : string,
    password : string,
  }
    
  myForm : FormGroup = generateMyForm(this.fb, this.httpC)

  constructor(
    private fb : FormBuilder,
    private httpC : HttpClient
  ) { }

  ngOnInit(): void {

  }

  sendForm(){
    console.log(this.myForm)

    if(this.myForm.status == "VALID")
    {

      this.myFormValue = { 
        name : this.myForm.value["name"],
        email : this.myForm.value["email"],
        password : this.myForm.value["password"],
        
      }
    }
      
  }

  log(){
    console.log(this.myForm)
  }
}
