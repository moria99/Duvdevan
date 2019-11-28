import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { user } from "../../classes/userClass";
import { UsersService } from "../../services/users/users.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  boxChecked = false;

  addNewUserToDb(newUserForm) {

  };

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

}