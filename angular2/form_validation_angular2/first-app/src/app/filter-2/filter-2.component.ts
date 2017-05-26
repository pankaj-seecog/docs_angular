import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-2',
  templateUrl: './filter-2.component.html',
  styleUrls: ['./filter-2.component.css']
})
export class Filter2Component implements OnInit {
private products : any[] = [
{id : 1 , product_name : 'Disprin',product_price : 130,status : 'active'},
{id : 2 , product_name : 'Alpres',product_price : 150,status : 'active'},
{id : 3 , product_name : 'Podin Hara',product_price : 120,status : 'inactive'}
];
  constructor() { }

  ngOnInit() {
  }
  
  addProduct(){
	  
	  this.products.push({id : 12,product_name : 'Test Product',product_price:899,status:'active'});
  }

}
