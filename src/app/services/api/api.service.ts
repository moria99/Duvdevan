import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createUser(newUser) {
    this.http.post("http://localhost:3000/createUser", newUser);
  }

  validateUser() {

  }


}
