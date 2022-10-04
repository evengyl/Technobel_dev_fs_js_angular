import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn : "root"
})
export class FakeLoginOBSService{
    
    isConnect : boolean = false


    //$isConnect : Subject<boolean> = new Subject<boolean>()
    $isConnect : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.verifyLogged())
    
    constructor(){
       

    }

    verifyLogged() : boolean{
        let tmpIsConnect = localStorage.getItem("isConnect")

        if(tmpIsConnect == "true"){
            this.isConnect = true
            return this.isConnect
        }
        else {
            return false
        }
    }


    login(){
        this.isConnect = true
        localStorage.setItem("isConnect", "true")
        this.emit_isConnect()
    }

    logout(){
        this.isConnect = false
        localStorage.removeItem("isConnect")
        this.emit_isConnect()
    }


    emit_isConnect(){
        this.$isConnect.next(this.isConnect)
      }
    

}