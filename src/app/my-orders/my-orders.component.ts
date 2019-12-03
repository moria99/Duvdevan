import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../services/orders/orders.service';


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
    console.log("kkkoo");
    
    this.OrdersService.getFromData(this.id).subscribe((d) => {
      console.log("hhhh");
      this.orders = d;
      this.orders=this.orders.recordset;
      console.log(this.orders);
      
    })
  }

}
