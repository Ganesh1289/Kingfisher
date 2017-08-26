import { Component } from '@angular/core';
import {GithubService} from '../Services/github.service';

@Component({
  selector: 'my-beersList',
  templateUrl: './beerslist.component.html'
})
export class BeersListComponent  { 

	beersData:any;


	constructor(private service:GithubService) {
		this.service.GetAllBeers().subscribe((res:any) => {
			console.log("asasas");
			console.log(res);
			this.beersData = res;		    
		});
	}

	getBeerByName(beerName:string) {
			console.log(beerName);
		
		}
	}
