import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { PriceDetailsComponent } from './components/order/price-details/price-details.component';


import { UserDetailsComponent } from './components/order/user-details/user-details.component';
import { PaymentComponent } from './components/order/payment/payment.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';


export const routesConfiguration: Routes = [
    {
        path: '',
        component: OrderDetailsComponent,
    },
    {
        path: 'log-in',
        component: LogInComponent,
        children: [
            {
                path: ':misHovala',
                component: LogInComponent,
            }
        ]
    },
    {
        path: 'price/:misHovala',
        component: PriceDetailsComponent,
    },
    {
        path: 'payment/:misHovala',
        component: PaymentComponent,
    },
    {
        path: 'myOrders/:KolAvLakoch',
        component: MyOrdersComponent,
    }
]