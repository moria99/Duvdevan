import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { OrderDetails } from 'src/app/classes/ordersClass';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: OrderDetails = new OrderDetails("", null, "", null, null, "", null, false, "", false, "", false, null);

  optionsOfCasting;
  OptionOfisConcrete
  id=5;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.getOptionOfCasting().subscribe((d) => {
      this.optionsOfCasting = d
      console.log(this.optionsOfCasting)
    })
    this.ordersService.getOptionOfisConcrete().subscribe((d) => {
      this.OptionOfisConcrete = d
      console.log(this.OptionOfisConcrete)
    })

  }

}
