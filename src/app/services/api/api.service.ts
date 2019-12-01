import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  priceDetails() {
     let b =this.http.get("http://localhost:3000/priceDetails");
     return b
  }
  
  totalPrice() {
     let a =this.http.get("http://localhost:3000/totalPrice");
    return a
  }
}
