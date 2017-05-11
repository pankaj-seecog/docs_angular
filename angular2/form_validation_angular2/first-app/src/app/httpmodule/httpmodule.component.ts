import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {FormGroup,FormControl} from '@angular/forms';
import {ServerService} from './serve.service';
import {User} from './user.model';
@Component({
  selector: 'app-httpmodule',
  templateUrl: './httpmodule.component.html',
  styleUrls: ['./httpmodule.component.css'],
  providers : [ServerService]
})
export class HttpmoduleComponent implements OnInit {

 signUp : FormGroup;
 private users : User[]=[];
  constructor(private srve : ServerService) { }

  ngOnInit() {
	  this.getRecord();
	  this.signUp = new FormGroup({
		  first_name : new FormControl(null),
		  last_name : new FormControl(null)
	  });
  }
  
  getRecord(){
	  /*this.srve.getRecord().subscribe(
	  (data : Response)=>{
		  const res = data.json()
		  console.log(res);
	  },
	  (error)=>console.log(error)
	  );	*/
      this.srve.getAllRecord().subscribe(
	  (data : any[])=>this.users = data,
	  (error)=>console.log(error)
	  );	  
  }
  
  addRecord(){
	  console.log(this.signUp)
	  this.srve.addRecord({first_name : this.signUp.value.first_name,last_name : this.signUp.value.last_name}).subscribe(
	  (response)=>console.log(response),
	  (error)=>console.log(error)
	  );
  }

}
