import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../../classes/userClass";
import { UsersService } from "../../services/users/users.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  url = "/src/app/images/arches-concrete-bridge.custom2.jpg";
  // url in ANGULAR start the path from /src.........

  boxChecked = false;
  password2;
  newUser = new User("", "", "", "", "", "");
  userName;
  password;
  allUserNamesFromDb;
  allUserNamesAndPassNamesFromDb;

  constructor(private usersService: UsersService) { }

  addNewUserToDb() {

    this.usersService.checkUserName().subscribe((r) => {
      let result;
      result = r;
      this.allUserNamesFromDb = result.recordset;

      console.log("we are inside comp.ts after checkUserName from UserService");
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
      this.newUser.clientCode = this.newUser.userName;
      if (this.allUserNamesFromDb) {
        this.usersService.createUser(this.newUser);
        console.log("after");
        alert("You are successfully registered and your Client Code is : " + this.newUser.clientCode);
        location.href = "http://localhost:4200/order/newOrder";
      }
    }
    else {
      alert("Password fields do not match - please try again.");
    }
  }

  validateUserNameAndPassName() {
    this.usersService.validateUserNameAndPassName().subscribe((r) => {
      let result;
      result = r;
      this.allUserNamesAndPassNamesFromDb = result.recordset;

      console.log("we are inside comp.ts after validateUserNameAndPassName from UsersService");
      console.log(this.allUserNamesFromDb);

      for (let u of this.allUserNamesAndPassNamesFromDb) {
        if (this.userName === u.UserName) {
          if (this.password === u.PassName) {
            alert("You have successfully logged in.  Click '' to continue to see your account orders.  Have a wonderful day!");
            location.href = "http://localhost:4200/order/newOrder";
          }
          // else alert("The username and password do not match.  Please try again or uncheck the 'Registered User' box and SIGN IN as a new user.");
        }
      }
      alert("The username and password do not match.  Please try again or uncheck the 'Registered User' box and SIGN IN as a new user.");
    });
  }

  ngOnInit() {
  }

}