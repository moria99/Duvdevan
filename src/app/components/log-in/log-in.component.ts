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
  allUserNamesFromDb;


  addNewUserToDb() {

    this.usersService.checkUserName().subscribe((r) => {
      let result;
      result = r;
      this.allUserNamesFromDb = result.recordset;

      console.log("we are inside comp.ts after checkuserName from UserService");
      console.log(this.allUserNamesFromDb);

      for (let u of this.allUserNamesFromDb) {
        if (this.newUser.userName == u.UserName) {
          alert("This username is already taken - please choose a different username.");
        }
      }
    });



    if (this.newUser.password === this.password2) {

      if (this.newUser.userName == "") {
        this.newUser.userName = this.newUser.phone;
      }
      // if (this.newUser.userName !== "")
      this.newUser.clientCode = this.newUser.userName;
      // else
      //   this.newUser.clientCode = this.newUser.phone; 
      if (this.allUserNamesFromDb) {
        this.usersService.createUser(this.newUser);
        console.log("after");

        alert("You are successfully registered and your Client Code is " + this.newUser.clientCode + " .");
      }

    }

    else {
      alert("Password fields do not match - please try again.");
    }
  }

  startValidation() {
    this.usersService.validateUser(this.userName, this.password)
  }

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

}