import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { PriceDetailsComponent } from './components/order/price-details/price-details.component';
import { UserDetailsComponent } from './components/order/user-details/user-details.component';
import { PaymentComponent } from './components/order/payment/payment.component';

export const routesConfiguration: Routes = [
    {
        path: '',
        children: [
            {
                path: 'log-in',
                component: LogInComponent,
                children: [
                    {
                        path: 'log-in',
                        component: LogInComponent,
                    },
            },
            {
                path: 'order',
                component: OrderComponent,
                children: [
                    {
                        path: 'newOrder',
                        component: OrderDetailsComponent,
                    },
                    {
                        path: 'price/:id',
                        component: PriceDetailsComponent,
                    },
                    {
                        path: 'log-in/:id',
                        component: UserDetailsComponent,
                    },
                    {
                        path: 'payment/:id',
                        component: PaymentComponent,
                    }
                ]
            }
        ]
    }
];