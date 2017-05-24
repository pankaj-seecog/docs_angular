import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ShortenPipe} from './shorten.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }
 // private currDate : date= new Date();
  private key : string='';
  private amount : number = 100000;
  private dur : string = 'twojdhcjdjnjkdnscjsdcncd';
  
  private products : any[] = [
  {id : 1 , name : 'Apple',cost : 100,status : 'yes'},
  {id : 2 , name : 'Banana',cost : 150,status : 'yes'},
  {id : 3 , name : 'Pineapple',cost : 200,status : 'no'}
  ];
  
  ngOnInit() {
  }

  loadServer(){
	  this.router.navigate(['/users']);
  }
  addProduct(){
	  this.products.push({id : 10 , name : 'D',cost : 150,status : 'yes'})
	  
  }
}
