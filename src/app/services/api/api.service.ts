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
    return this.http.get("http://localhost:3000/getOptionOfCasting")}


  priceDetails() {
    let b = this.http.get("http://localhost:3000/priceDetails");
    return b
  }

  totalPrice() {
    return this.http.get("http://localhost:3000/totalPrice");
  }

  getCastingType() {
    return this.http.get("http://localhost:3000/getCastingType");
  }

  getConcreteType() {
    return this.http.get("http://localhost:3000/getConcreteType");
  }
  
  getPumpType() {
    return this.http.get("http://localhost:3000/getPumpType");
  }

  pushDetailsForm(newForm) {
    return this.http.post("http://localhost:3000/pushDetailsForm", newForm);
  }
};
