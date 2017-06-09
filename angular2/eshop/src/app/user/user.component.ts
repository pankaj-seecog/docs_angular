import { Component, OnInit } from '@angular/core';
/*import {UserService} from './user.service';
import {CalculatorService} from './calculator.service';
import {DataService} from './data.service';*/
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  //providers : [UserService,CalculatorService,DataService]
})
export class UserComponent implements OnInit {
  /*constructor(private userService : UserService,private calculatorService : CalculatorService,private dataService : DataService) { }*/
  
  constructor(){
	  
  }

  ngOnInit() {
	  console.log('Start')
	  this.getUser().then(function(data){
		  console.log('The casual data is ')
		  console.log(data)
		  
	  }).catch(function(err){
		 console.log('The error is ') 
		 console.log(err) 
	  });
  }
  
  getUser(){
	  
	  return new Promise((resolve,reject)=>{
		  
		  setTimeout(()=>{
			  resolve('Got users data')
		  },20000);
		  
	  })
	  
  }
  
  

}
