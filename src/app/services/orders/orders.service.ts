import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'

})
export class OrdersService {
  constructor(private http: HttpClient) { }

  getOptionOfCasting() {
    return this.http.get("http://localhost:3000/getOptionOfCasting")
  }

  getOptionOfisConcrete() {
    return this.http.get("http://localhost:3000/getOptionOfisConcrete")

  }
}

