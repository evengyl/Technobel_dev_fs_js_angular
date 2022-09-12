import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';



@NgModule({
  declarations: [
    EditUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers : [AdminService]
})
export class AdminModule { }
