import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(){}//private route : ActivatedRoute)
//private user : {id : number,name : string};
private user : any = {name :'Aryan', roll : 1};
  ngOnInit() {
	 // var id = this.route.snapshot.params['id'];
	/* this.user = {id : this.route.snapshot.params['id'], name : this.route.snapshot.params['name'] }
  
  this.route.params.subscribe(
  (params : Params) => {
	  this.user.id = params['id']
  }
  );*/
  }
  
  
  

}
