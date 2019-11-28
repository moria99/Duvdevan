import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders;
  @input() id: number;

  constructor(private OrderService: OrderService) { }

  ngOnInit() {
    this.OrderService.getFromData(this.id).subscribe((d) => {
      this.orders = d;
    })
  }

}
