import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  priceDetails() {
    return this.http.get("http://localhost:3000/priceDetails");
  }
  totalPrice() {
    return this.http.get("http://localhost:3000/totalPrice");
  }
}
