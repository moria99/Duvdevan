import { Component, OnInit, Input } from '@angular/core';
import { OrderDetails } from '../../classes/OrderDetails';
import { OrdersService } from '../../services/orders/orders.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders;
  id;
  constructor(private OrdersService: OrdersService,public activeRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log("kkkoo");

    this.activeRoute.paramMap.subscribe(map => {
      this.id = map.get('KolAvLakoch');
      console.log(this.id);
    })

    this.OrdersService.getFromData(this.id).subscribe((d) => {
      console.log("hhhh");
      this.orders = d;
      this.orders = this.orders.recordset;
      console.log(this.orders.THovala);

    })
  }

}
