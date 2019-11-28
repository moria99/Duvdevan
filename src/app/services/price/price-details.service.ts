import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PriceList } from '../../classes/priceclass';
import { TotalList } from '../../classes/totalclass';


@Injectable({
  providedIn: 'root'
})
export class PriceDetailsService {

  constructor(private http: HttpClient) { }



  priceDetails() {
    return this.http.get("http://localhost:3000/priceDetails");
  }
  totalPrice() {
    return this.http.get("http://localhost:3000/totalPrice");
  }
}
