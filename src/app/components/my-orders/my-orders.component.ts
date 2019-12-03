import { Component, OnInit, Input } from '@angular/core';
import { OrderDetails } from '../../classes/OrderDetails';
import { OrdersService } from '../../services/orders/orders.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders;
@Input() id:number
  constructor(private OrdersService: OrdersService) { }

  ngOnInit() {
    this.OrdersService.getFromData(this.id).subscribe((d) => {
      this.orders = d;
    })
  }

}
