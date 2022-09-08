import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Binding1Component } from './demos/binding1/binding1.component';
import { Twowaybinding2Component } from './demos/twowaybinding2/twowaybinding2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component :HomeComponent},
  {path:"demos/binding", component:Binding1Component},
  {path:"demos/twowaybinding", component:Twowaybinding2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
