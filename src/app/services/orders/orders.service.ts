import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private apiService: ApiService) { }

  getFromData(x) {
    return this.apiService.getOrders(x)
  }

  saveOrder() {

  }
  getOrder() {

  }

}
