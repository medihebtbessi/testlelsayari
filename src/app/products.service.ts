import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./models/Product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl:string='http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  public addProd(prod:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl,prod);
  }

  public getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  public getById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
