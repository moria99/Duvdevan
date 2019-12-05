import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../../services/orders/orders.service';
import { OrderDetails } from '../../../classes/ordersClass';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  details: OrderDetails = new OrderDetails("", null, null, "", null, "", "", "", null);
  optionsOfCastingType;
  optionsOfConcreteType;
  optionsOfPumpType;
  street: string = "";
  houseNumber: number = null;
  city: string = "";
  advancedType1;
  advancedType2;
  advancedType3;
  advancedType4;
  advancedType5;
  isConcrete: boolean = false;
  isAdvanced: boolean = false;
  isPump: boolean = false;
  isRubberHose: boolean = false;
  isPlus: boolean = false;

  constructor(private detailsService: OrdersService) { }

  checkAdvancedType(): string {
    for (let sug of this.optionsOfConcreteType) {
      if (sug.SugBeton == this.advancedType1 && sug.Chozek == this.advancedType2 && sug.TzorechBeton == this.advancedType3 && sug.DargatChasifa == this.advancedType4 && sug.SomechBeton == this.advancedType5)
        return sug.KodParit;
    }
    alert("'לא קיים צרוף כזה ב'בטון מתקדם");
  }

  SaveDetailsForm(orderDetailsForm) {
    this.details.userAddress = this.street + " " + this.houseNumber + " " + this.city;
    this.details.plus = String(this.isPlus);
    
    if (this.isRubberHose) {
      alert("יש להזין אורך צינור");
    }
    if (this.isAdvanced) {
      this.details.pritimBetonKodParit = this.checkAdvancedType();
    }

    let newForm = new OrderDetails(this.details.userAddress,
      this.details.date, this.details.time,
      this.details.sugYetzikaKodParit,
      this.details.quantity, this.details.plus,
      this.details.pritimBetonKodParit,
      this.details.pritimMashevaKodParit, this.details.hoseLength);

    console.log(newForm);
    this.detailsService.saveOrder(newForm).subscribe((d) => {
      orderDetailsForm.reset();
    });
  }


  ngOnInit() {

    this.detailsService.getCastingType().subscribe((d) => {

      this.optionsOfCastingType = d;
      this.optionsOfCastingType = this.optionsOfCastingType.recordset;
      console.log(this.optionsOfCastingType);
    });
    this.detailsService.getConcreteType().subscribe((d) => {

      this.optionsOfConcreteType = d;
      this.optionsOfConcreteType = this.optionsOfConcreteType.recordset;
      console.log(this.optionsOfConcreteType);
    });
    this.detailsService.getPumpType().subscribe((d) => {

      this.optionsOfPumpType = d;
      this.optionsOfPumpType = this.optionsOfPumpType.recordset;
      console.log(this.optionsOfPumpType);
    });
  }
}
