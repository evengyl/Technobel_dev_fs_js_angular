import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';

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
import { DI12Component } from './demos/di12/di12.component';
import { RefreshPromise13Component } from './demos/refresh-promise13/refresh-promise13.component';


import { Exos1CalculetteComponent } from './exos/exos1-calculette/exos1-calculette.component';
import { Exos2CustomspipesComponent } from './exos/exos2-customspipes/exos2-customspipes.component';
import { Exos3CustomCartsComponent } from './exos/exos3-custom-carts/exos3-custom-carts.component';
import { Exos4CustomsDirectivesComponent } from './exos/exos4-customs-directives/exos4-customs-directives.component';
import { CartComponent } from './exos/exos5-input-output/cart/cart.component';
import { AsyncAwait14Component } from './demos/async-await14/async-await14.component';
import { Exos6PromiseComponent } from './exos/exos6-promise/exos6-promise.component';
import { HttpClient15Component } from './demos/http-client15/http-client15.component';
import { FetchPromiseComponent } from './remediations/22092022/fetch-promise/fetch-promise.component';
import { LoginremComponent } from './remediations/22092022/loginrem/loginrem.component';




const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "demos", children: [
			{ path: "binding", component: Binding1Component },
			{ path: "twowaybinding", component: Twowaybinding2Component },
			{ path: "four0four", component: Four0four3Component },
			{ path: "event", component: Eventbinding4Component },
			{ path: "propertymodel", component: Propertymodel5Component },
			{ path: "pipes", component: Thepipes6Component },
			{ path: "cpipes", component: Custompipes7Component },
			{ path: "strdirectives", component: Structuralsdirectives8Component },
			{ path: "attrdirectives", children: [
					{ path: "native", component: Attributesdirectives9Component },
					{ path: "custom", component: Attributesdirectivescustom10Component },
				]
			},
			{ path: "inputoutput", component : ParentComponent},
			{ path: "diServices", component : DI12Component},
			{ path: "refreshpromise", component : RefreshPromise13Component},
			{ path: "asyncawait", component : AsyncAwait14Component},
			{ path: "httpclient", component : HttpClient15Component},

			
		]
	},
	{
		path: "exos", children: [
			{ path: "calculette", component: Exos1CalculetteComponent },
			{ path: "customspipes", component: Exos2CustomspipesComponent },
			{ path: "customcart", component: Exos3CustomCartsComponent },
			{ path: "customsdirectives", component : Exos4CustomsDirectivesComponent},
			{ path: "inputoutput", component : CartComponent},
			{ path: "promise", component : Exos6PromiseComponent},
		]
	},
	{
		path : "rem", children: [
			{ path : "login", component : LoginremComponent},
			{ path : "fetching", component : FetchPromiseComponent}
		]
	},







	{ path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
	{ path: "**", component: Four0four3Component }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
