import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  isOrderDetails:boolean=true;
  isPriceDetails:boolean=false;
  isUserDetails:boolean=false;
  isPayment:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
