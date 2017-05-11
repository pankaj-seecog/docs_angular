import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-microvan',
  templateUrl: './microvan.component.html',
  styleUrls: ['./microvan.component.css']
})
export class MicrovanComponent implements OnInit {
@Input() first_name : string = 'Pankaj';
@Input() last_name : string = '';
private email : string='pankaj@gmail.com';
@Output() clickable = new EventEmitter<string>();
@Output() secondClick = new EventEmitter<string>();
private src : string = 'http://www.thehindu.com/news/national/article18389571.ece/alternates/FREE_960/MULAYAM-SHIVPAL';
private stt=false;
private data : string = 'The treatment for the malaria';
  constructor() { }

  ngOnInit() {
  }
  
  done(){
	  //this.clickable.emit('Mahesh');
	  this.secondClick.emit('Gwalior');
  }
  
  getClass(){
	  return {'my':true,'myTwo':true};
  }

  
}
