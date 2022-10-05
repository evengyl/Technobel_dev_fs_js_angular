import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn : "root"
})
export class FakeLoginOBSService{
    
    isConnect : boolean = false


    //$isConnect : Subject<boolean> = new Subject<boolean>()
    $isConnect : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.verifyLogged())
    $interval : Subject<number> = new Subject<number>()
    interval : any
    
    constructor(){}

    verifyLogged() : boolean{
        let tmpIsConnect = localStorage.getItem("isConnect")

        if(tmpIsConnect == "true"){

            
            this.set_interval()
            this.isConnect = true
            return this.isConnect
        }
        else {
            return false
        }
    }


    set_interval()
    {
        if(this.interval == undefined)
        {
            let i = 0
            this.interval = setInterval(() => {
                i ++ 
                this.$interval.next(i)
            }, 1000)
        }
    }


    login(){
        this.isConnect = true
        localStorage.setItem("isConnect", "true")
        this.set_interval()
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