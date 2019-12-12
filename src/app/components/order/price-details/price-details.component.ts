import { Component, OnInit } from '@angular/core';
import { PriceList } from '../../../classes/priceclass';
import { TotalList } from '../../../classes/totalclass';
import { PriceDetailsService } from '../../../services/price/price-details.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit {

  constructor(public PriceDetails: PriceDetailsService, public activeRoute: ActivatedRoute) { }

  total;
  pricesArray;
  r;

  ngOnInit() {

    this.PriceDetails.priceDetails().subscribe((d) => {
      console.log(d);
      this.pricesArray = d;
      this.pricesArray = this.pricesArray.recordset;
    });

    this.PriceDetails.totalPrice().subscribe((d) => {
      console.log(d);
      this.total = d;
      this.total = this.total.recordset[0];
      // console.log(this.total); 

    });

    // this.activeRoute.paramMap.subscribe(map => {
    //   this.r = map.get('c');
    //   console.log(this.r);
    // })
  }
}
