import { User } from "../../classes/userClass";
import { ApiService } from "../api/api.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) { }

  createUser(newUser) {
   return this.apiService.createUser(newUser);
  }
  checkUserName() {
    return this.apiService.getUserNames();
  }

  validateUserNameAndPassName() {
    return this.apiService.validateUser();
  }

  
}
