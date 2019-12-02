import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { PriceList } from '../../classes/priceclass';
import { TotalList } from '../../classes/totalclass';
import { ApiService } from '../api/api.service';
// import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PriceDetailsService {

  constructor(public Api: ApiService) { }

  priceDetails() {
    return this.Api.priceDetails();
  }

  totalPrice() {
    return this.Api.totalPrice();
  }
};
