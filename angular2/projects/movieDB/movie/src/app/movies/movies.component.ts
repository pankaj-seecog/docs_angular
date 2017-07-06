import { Component, OnInit } from '@angular/core';
import {Movie} from '../services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers : [Movie]
})
export class MoviesComponent implements OnInit {
private popularMovies : any[];
private search : string;
  constructor(private movie : Movie) { }

  ngOnInit() {
	  this.movie.getPopular().subscribe(
	  (data)=>{
		  console.log('The pi data is ')
		  console.log(JSON.stringify(data.results))
		  this.popularMovies = data.results;
	  },
	  (error)=>{
		  console.log('Th error is ')
		  console.log(error)
	  }
	  
	  );
  }
  
  searchMovie(){
	  this.movie.searchMovie(this.search).subscribe(
	  (res)=>{
		 console.log('The response is ') 
		 console.log(res)
	  },
	  (error)=>console.log(error)
	  )
  }

}
