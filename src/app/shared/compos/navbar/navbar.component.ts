import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeLoginOBSService } from 'src/app/demos/obs20/fakeLoginOBS.service';
import { FakeLoginService } from '../../services/fake-login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isConnect: boolean = false
  timeConnectUser : number = 0

  constructor(private fakeLoginObsServe : FakeLoginOBSService) { }

  ngOnInit(): void {


    this.fakeLoginObsServe.$isConnect.subscribe((isConnect : boolean) => {
      this.isConnect = isConnect

      this.fakeLoginObsServe.$interval.subscribe((timeConnect) => {
        this.timeConnectUser = timeConnect
      })
    })
    

    let  elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems)
  }

}
