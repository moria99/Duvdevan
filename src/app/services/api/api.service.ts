import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class ApiService {

  constructor(private http: HttpClient) { }
  getOrders(x) {
    return this.http.get('http://localhost:3000/getOrders', x)}

  createUser(newUser) {
    return this.http.post("http://localhost:3000/createUser", newUser);
  }

  validateUser() {

  }


  getOptionOfCasting() {
    return this.http.get("http://localhost:3000/getOptionOfCasting")
  }

  priceDetails() {
    return this.http.get("http://localhost:3000/priceDetails");
  }

  totalPrice() {
    return this.http.get("http://localhost:3000/totalPrice");

  }
  
  getOptionOfisConcrete() {
    return this.http.get("http://localhost:3000/getOptionOfisConcrete")
  }
}
