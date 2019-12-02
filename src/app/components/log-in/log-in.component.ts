import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../../classes/userClass";
import { UsersService } from "../../services/users/users.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  boxChecked = false;

  password2;
  newUser = new User("", "", "", "", "", "");

  userName;
  password;

  addNewUserToDb() {

    if (this.newUser.password === this.password2) {

      if (this.newUser.userName == null) {
        this.newUser.userName = this.newUser.phone;
      }

      if (this.newUser.companyNumber !== null) {
        this.newUser.clientCode = this.newUser.companyNumber;
      }
      else {
        if (this.newUser.userName !== null)
          this.newUser.clientCode = this.newUser.userName;
        else
          this.newUser.clientCode = this.newUser.phone;
      }

      this.usersService.createUser(this.newUser);
      console.log("after");
    }
    else { alert("Password fields do not match - please try again."); }

  }

  startValidation() {
    this.usersService.validateUser(this.userName, this.password)
  }

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

}