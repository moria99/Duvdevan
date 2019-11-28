import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { PriceList } from '../../classes/priceclass';
import { TotalList } from '../../classes/totalclass';
import { ApiService } from '../api/api.service';


@Injectable({
  providedIn: 'root'
})
export class PriceDetailsService {

  constructor(public Api: ApiService) { }


  priceDetails() {
    this.Api.priceDetails().subscribe((d) => {
      return d;
    })
  }
  totalPrice() {
    this.Api.totalPrice().subscribe((d) => {
      return d;
    })
  }
}
