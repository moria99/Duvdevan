import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { PriceDetailsComponent } from './components/order/price-details/price-details.component';
import { UserDetailsComponent } from './components/order/user-details/user-details.component';
import { PaymentComponent } from './components/order/payment/payment.component';

import { FormsModule } from '@angular/forms';

import { UsersService } from '../app/services/users/users.service';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    LogInComponent,
    WelcomeComponent,
    MyOrdersComponent,
    OrderDetailsComponent,
    PriceDetailsComponent,
    UserDetailsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
