import { Component, OnInit } from '@angular/core';
import {Product} from './oroduct.model';
import {ProductService} from './product.service';
import {Response} from '@angular/http';
@Component({
  selector: 'app-httpmodule2',
  templateUrl: './httpmodule2.component.html',
  styleUrls: ['./httpmodule2.component.css'],
  providers : [ProductService]
})
export class Httpmodule2Component implements OnInit {
private products : Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit() {
	  //this.getproducts();
  }
  
  getProducts = function(){
	  alert('Hii inside the getProducts()')
	  this.productService.getProducts().subscribe(
	  (res : any[])=> this.products = res,
	  (error)=>console.log(error)
	  );
  }
  
  saveProduct(){
	  
	  this.productService.addProduct({name : 'Mango',cost : 100,img : '',brand : 'Lg'}).subscribe(
		  (data : Response)=>{
			  this.products = data.json()
		  },
	      (error)=>console.log(error)
	  );
  }

}
