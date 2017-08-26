import { Component, OnInit } from '@angular/core';
import {GithubService} from '../Services/github.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-beer',
  templateUrl: './beer.component.html'
})
export class BeerComponent implements OnInit  { 

	beerData:any;


	constructor(private service:GithubService, private router:ActivatedRoute) {
		/*this.service.GetBeerByName().subscribe((res:any) => {
			console.log("asasas");
			console.log(res);
		});*/
	}

	ngOnInit() {
		this.router.params.subscribe(params => {
			let name = params['name'];
			console.log(name);
			this.service.GetBeerByName(name).subscribe((res:any) => {
			this.beerData = res;			
			console.log(this.beerData);
			});
		});
	}
}
