import { Component, OnInit } from '@angular/core';
// import { PriceList } from '../../classes/priceclass';
// import { TotalList } from '../classes/totalclass';
import { PriceDetailsService } from '../../../services/price/price-details.service'

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit {

  constructor(public PriceDetails: PriceDetailsService) { }

  total;
  pricesArray;

  ngOnInit() {

    this.PriceDetails.priceDetails().subscribe((d) => {
       this.pricesArray = d;
    });

    this.PriceDetails.totalPrice().subscribe((d) => {
      this.total =d[0];
      // console.log(this.total); 

    });

  }
}
