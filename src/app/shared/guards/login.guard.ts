import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeLoginService } from '../services/fake-login.service';
import { Toast } from '../toasts/MaterializeToasts';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  isConnect : boolean = false

  constructor(private fakeLoginServe : FakeLoginService, private router : Router){
  }
  
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.isConnect = this.fakeLoginServe.isConnect

    if(this.isConnect)
      return true
    else{
      Toast.notLogged()
      this.router.navigate(["/demos/diServices"])
      return false
    }
  }

}
