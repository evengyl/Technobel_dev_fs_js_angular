import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html'
})
export class EditUsersComponent implements OnInit {

  constructor(private test :  AdminService) { }

  ngOnInit(): void {
  }

}
