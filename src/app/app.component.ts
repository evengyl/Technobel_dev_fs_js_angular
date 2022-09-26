import { Component } from '@angular/core';
import { FakeLoginService } from './shared/services/fake-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private fakeLoginServe : FakeLoginService){
    this.fakeLoginServe.refresh()
  }
}
