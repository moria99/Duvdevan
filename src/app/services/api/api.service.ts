import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getOrders(x) {
    return this.http.get('http://locallhot:3000/getOrders',x);

  }
}
