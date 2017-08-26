import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { BeersListComponent }  from './Beers/beerslist.component';
import { BeerComponent }  from './Beers/beer.component';

const routes: Routes = [{
							path: '',
							component: BeersListComponent
						},
						{
							path: 'beer/:name',
							component:BeerComponent
							
						}];
	export const routing:ModuleWithProviders = RouterModule.forRoot(routes);