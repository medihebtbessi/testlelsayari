import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../models/Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products:Product[]=[];
  prod!:Product;
  constructor(private service:ProductsService) {
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(){
    this.service.getAllProduct().subscribe({
      next:(res=>{
        this.products=res;
      })
    });
  }

  public like(id:number){
    this.service.getById(id).subscribe({
      next:(res=>{
        this.prod=res;
      })
    });
   let i= this.prod.likes.pop();
    this.prod.likes.push(1);
  }



}
