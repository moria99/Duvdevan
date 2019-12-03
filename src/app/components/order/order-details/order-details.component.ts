import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { OrderDetails } from 'src/app/classes/ordersClass';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  details: OrderDetails = new OrderDetails("", null, "", null, null, "", null, false, false, "", false, "", "", "", "", "", false, "", false, null);
  optionsOfCastingType;
  optionsOfConcreteType;
  optionsOfPumpType;

  constructor(private ordersService: OrdersService) { }

  SaveDetailsForm(orderDetailsForm) {
    let newForm = new OrderDetails(this.details.street, this.details.houseNumber, this.details.city,
      this.details.date, this.details.time, this.details.castingType, this.details.quantity, this.details.isPlus,
      this.details.isConcrete, this.details.concreteType, this.details.isAdvanced,
      this.details.advancedType1, this.details.advancedType2, this.details.advancedType3, this.details.advancedType4, this.details.advancedType5,
      this.details.isPump, this.details.pumpType, this.details.isRubberHose, this.details.hoseLength);
      //בדיקה אם הצרוף קיים או לא
    this.ordersService.saveOrder(newForm).subscribe(() => { });
    orderDetailsForm.reset();
  }


  ngOnInit() {

    this.ordersService.getCastingType().subscribe((d) => {
      this.optionsOfCastingType = d;
      this.optionsOfCastingType = this.optionsOfCastingType.recordset;
      console.log(this.optionsOfCastingType);
    });
    this.ordersService.getConcreteType().subscribe((d) => {
      this.optionsOfConcreteType = d;
      this.optionsOfConcreteType = this.optionsOfConcreteType.recordset;
    });
    this.ordersService.getPumpType().subscribe((d) => {
      this.optionsOfPumpType = d;
      this.optionsOfPumpType =  this.optionsOfPumpType.recordset;
    });
  }

}
