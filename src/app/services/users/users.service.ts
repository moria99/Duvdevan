import { User } from "../../classes/userClass";
import { ApiService } from "../api/api.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) { }

  createUser(newUser) {
    this.apiService.createUser(newUser).subscribe((r) => {
      let result = r;
      return result;
    });
  }

  validateUser(userName, password) {

  }

  // login() {

  // }
}
