import { User } from "../../classes/userClass";
import { ApiService } from "../api/api.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) { }

  createUser(newUser) {
    let result = this.apiService.createUser(newUser);
    return result;
  }

  validateUser(userName, password) {

  }

  // login() {

  // }
}
