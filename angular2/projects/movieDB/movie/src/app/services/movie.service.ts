import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';//reactive extension
@Injectable()
export class Movie{
	apikey : string;
	constructor(private http : Http){
		this.apikey = '8301a21598f8b45668d5711a814f01f6';
		console.log('Movie service gets initialized')
	}
	
	getPopular(){
		return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='+this.apikey).map(res=>res.json())
	}
	
	getInTheaters(){
		return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22').map(res=>res.json());
	}
	
}