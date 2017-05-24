import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

  constructor() { }

  ngOnInit() {
	 // const myNumbers = Observable.interval(1000);
	  /*const myNumbers = Observable.interval(1000).map(
	  (data : number)=>{
		 console.log(data)
	  }
	  
	  )*/
	 /* myNumbers.subscribe(
	  (number : number)=>console.log(number),
	  (error)=>console.log(error)
	  );*/
	  
	  /*const myObserver = Observable.create(
	  (observer : Observer<string>)=>{
		  setTimeout(()=> { 
		  observer.next('First Point');
		  },1000);
		  setTimeout(()=>{
			  observer.next('Second Point');			  
		  },2000);
		  setTimeout(()=>{
			  observer.error('The error is here')
		  },3000);
		  setTimeout(()=>{
			  observer.complete();
		  },4000);
		  setTimeout(
		  ()=>{
			  observer.next('Third point')
		  },5000);
	  });
	  */
	 /* myNumbers.subscribe(
	  (data : string)=>console.log(data),
	  (error : string)=>console.log(error),
	  ()=>'completed'
	  )*/
	  
	  
		  
	  }
  }


