import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'

})
export class OrdersService {

  // getOptionOfCasting() {
  //   return this.http.get("http://localhost:3000/getOptionOfCasting")
  // }


  constructor(private apiService: ApiService) { }

  getFromData(x) {
    return this.apiService.getOrders(x)
  }

  saveOrder() {

  }
  getOrder() {

  }

  // getOptionOfisConcrete() {
  //   return this.http.get("http://localhost:3000/getOptionOfisConcrete")

  // }
}

