import { Component, OnInit } from '@angular/core';
import { FakeLoginOBSService } from 'src/app/demos/obs20/fakeLoginOBS.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isConnect: boolean = false

  constructor(private fakeLoginObsServe : FakeLoginOBSService) { }

  ngOnInit(): void {


    this.fakeLoginObsServe.$isConnect.subscribe((isConnect : boolean) => {
      console.log("next emit !")
      this.isConnect = isConnect
    })
    

    console.log("chargée")
    let  elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems)
  }

}
