import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
	
	constructor(private http: Http, private jsonp: Jsonp) {

	}

	SearchUser(username:string) {
			return this.http.get('http://api.github.com/users/' + username).map(res => res.json());
	}

	GetRepos(username:string) {

		console.log("http://api.github.com/users/" + username + "/repos?client_id=3cf3dba9cd18e77161ec&client_secret=628566573db545bb0f00492aec9982dee40eeb24");

		return this.http.get('http://api.github.com/users/' + username + '/repos?client_id=3cf3dba9cd18e77161ec&client_secret=628566573db545bb0f00492aec9982dee40eeb24').map(res => res.json());
	}
	GetAllBeers() {		
		let headers = new Headers({'X-Mashape-Key':'6bb02684d9154fc6bfb56935392de8c2'});
    	headers.append( 'Accept', 'application/json');
		return this.http.get("https://api.punkapi.com/v2/beers")
       .map((res) => res.json());
	}

	GetBeerByName(name:string) {		
		return this.http.get("https://api.punkapi.com/v2/beers?beer_name="+name)
       .map((res) => res.json());     
	}
}