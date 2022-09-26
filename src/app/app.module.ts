import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import * as M from 'materialize-css'
M.AutoInit()


import { NavbarComponent } from './shared/compos/navbar/navbar.component';
import { FooterComponent } from './shared/compos/footer/footer.component';
import { HomeComponent } from './home/home.component';


import { PowPipe } from './demos/custompipes7/pow.pipe';
import { SecondToHumanTimePipe } from './shared/pipes/second-to-human-time.pipe';
import { SecondToFahrenheitPipe } from './shared/pipes/second-to-fahrenheit.pipe';
import { SecondReversePipe } from './shared/pipes/second-reverse.pipe';
import { SecondToThunassePipe } from './shared/pipes/second-to-thunasse.pipe';


import { BoundedParagraphDirective } from './shared/directives/bounded-paragraph.directive';
import { RenderDirective } from './shared/directives/render.directive';
import { HightlightDirective } from './shared/directives/hightlight.directive';
import { BolderDirective } from './shared/directives/bolder.directive';
import { ToasterPersoDirective } from './shared/directives/toaster-perso.directive';


import { Exos1CalculetteComponent } from './exos/exos1-calculette/exos1-calculette.component';
import { Exos2CustomspipesComponent } from './exos/exos2-customspipes/exos2-customspipes.component';
import { Exos3CustomCartsComponent } from './exos/exos3-custom-carts/exos3-custom-carts.component';
import { Exos4CustomsDirectivesComponent } from './exos/exos4-customs-directives/exos4-customs-directives.component';
import { CartComponent } from './exos/exos5-input-output/cart/cart.component';
import { ProductComponent } from './exos/exos5-input-output/product/product.component';


import { Binding1Component } from './demos/binding1/binding1.component';
import { Twowaybinding2Component } from './demos/twowaybinding2/twowaybinding2.component';
import { Four0four3Component } from './demos/four0four3/four0four3.component';
import { Eventbinding4Component } from './demos/eventbinding4/eventbinding4.component';
import { Propertymodel5Component } from './demos/propertymodel5/propertymodel5.component';
import { Thepipes6Component } from './demos/thepipes6/thepipes6.component';
import { Custompipes7Component } from './demos/custompipes7/custompipes7.component';
import { Structuralsdirectives8Component } from './demos/structuralsdirectives8/structuralsdirectives8.component';
import { Attributesdirectives9Component } from './demos/attributesdirectives9/attributesdirectives9.component';
import { Attributesdirectivescustom10Component } from './demos/attributesdirectivescustom10/attributesdirectivescustom10.component';
import { ParentComponent } from './demos/input-output11/parent/parent.component';
import { ChildComponent } from './demos/input-output11/child/child.component';
import { DI12Component } from './demos/di12/di12.component';
import { RefreshPromise13Component } from './demos/refresh-promise13/refresh-promise13.component';
import { AsyncAwait14Component } from './demos/async-await14/async-await14.component';
import { Exos6PromiseComponent } from './exos/exos6-promise/exos6-promise.component';
import { HttpClient15Component } from './demos/http-client15/http-client15.component';
import { FetchPromiseComponent } from './remediations/22092022/fetch-promise/fetch-promise.component';
import { LoginremComponent } from './remediations/22092022/loginrem/loginrem.component';
import { RemediationService } from './remediations/22092022/remediation.service';
import { Guardian16Component } from './demos/guardian16/guardian16.component';
import { Storages17Component } from './demos/storages17/storages17.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Binding1Component,
    Twowaybinding2Component,
    Four0four3Component,
    Eventbinding4Component,
    Exos1CalculetteComponent,
    Propertymodel5Component,
    Thepipes6Component,
    Custompipes7Component,
    PowPipe,
    Exos2CustomspipesComponent,
    SecondToHumanTimePipe,
    SecondToFahrenheitPipe,
    SecondReversePipe,
    SecondToThunassePipe,
    Structuralsdirectives8Component,
    Exos3CustomCartsComponent,
    Attributesdirectives9Component,
    Attributesdirectivescustom10Component,
    RenderDirective,
    HightlightDirective,
    Exos4CustomsDirectivesComponent,
    BolderDirective,
    ToasterPersoDirective,
    BoundedParagraphDirective,
    ParentComponent,
    ChildComponent,
    DI12Component,
    CartComponent,
    ProductComponent,
    RefreshPromise13Component,
    AsyncAwait14Component,
    Exos6PromiseComponent,
    HttpClient15Component,
    FetchPromiseComponent,
    LoginremComponent,
    Guardian16Component,
    Storages17Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
