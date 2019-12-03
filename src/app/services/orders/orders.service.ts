import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'

})
export class OrdersService {

  constructor(private apiService: ApiService) { }

  getCastingType() {
    return this.apiService.getCastingType();
  }

  getConcreteType() {
    return this.apiService.getConcreteType();
  }

  getPumpType() {
    return this.apiService.getPumpType();
  }

  getFromData(x) {
    console.log("jjj");
    return this.apiService.getOrders(x);
  }

  saveOrder(newForm) {
    return this.apiService.pushDetailsForm(newForm);
  }
  getOrder() {

  }
}

