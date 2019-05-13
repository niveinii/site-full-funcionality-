import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri: string = 'http://localhost:4000/product';

  constructor(private http:HttpClient) { }

  addProduct(productObj) {
   return this.http.post(`${this.uri}/add`,productObj);
  }
  removeProduct(id) {
    return this.http.get(`${this.uri}/remove/${id}`, id);
  }
  getProducts() {
    return this.http.get(`${this.uri}/get`);
  }
  editProduct(id, productObj) {
    return this.http.put(`${this.uri}/edit/${id}`, productObj);
  }
  getProductById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }
}
