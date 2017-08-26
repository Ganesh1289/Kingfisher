import { Component } from '@angular/core';
import {GithubService} from '../Services/github.service';

@Component({
  selector: 'my-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  { 

	searchtxt:string;
	userData:any;
	reposData:any;

	tovisible:boolean = false;
	variable:string = "name";

	courses:Array<string> = ["Java", "C", "C++", "Html"];

	systems:any = [{ name: "HP", year:2010},
			       {name:"ACER", year:2011},
				   {name:"DELL", year:2017}];

	constructor(private service:GithubService) {
		this.userData = false;
	}

	OnSearch() {
		if(this.searchtxt) {
			this.service.SearchUser(this.searchtxt).subscribe((res:any) => {
			console.log(res);
			this.userData = res;
			});
	    }
	    this.OnGetRepos();
	}

	OnGetRepos() {
		if(this.searchtxt) {
			this.service.GetRepos(this.searchtxt).subscribe((res:any) => {
			console.log("Repos"+res);
			this.reposData = res;
			});
		}
	}
}
