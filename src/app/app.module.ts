import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {JsonpModule} from '@angular/http';

import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { SearchComponent }  from './Search/search.component';
import { BeersListComponent }  from './Beers/beerslist.component';
import { BeerComponent }  from './Beers/beer.component';

import { routing} from './app.routing';

import { GithubService } from './Services/github.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing],
  declarations: [ AppComponent, SearchComponent, BeersListComponent, BeerComponent ],
  bootstrap:    [ AppComponent ],
  providers:	[GithubService]
})
export class AppModule { }
