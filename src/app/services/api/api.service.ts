import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createUser(newUser) {
    return this.http.post("http://localhost:3000/createUser", newUser);
  }

  validateUser() {

  }


  getOrders(x) {
    return this.http.get('http://locallhot:3000/getOrders', x);
  }

  getOptionOfCasting() {
    return this.http.get("http://localhost:3000/getOptionOfCasting")
  }

  priceDetails() {
    let b = this.http.get("http://localhost:3000/priceDetails");
    return b
  }

  totalPrice() {

    return this.http.get("http://localhost:3000/totalPrice");

  }
  
    // getOptionOfisConcrete() {
  //   return this.http.get("http://localhost:3000/getOptionOfisConcrete");
  
  getOptionOfisConcrete() {
    return this.http.get("http://localhost:3000/getOptionOfisConcrete")

  }

};
