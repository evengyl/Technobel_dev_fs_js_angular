import { Component, OnInit } from '@angular/core';
import { FakeLoginService } from '../../services/fake-login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let  elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems)
  }

}
