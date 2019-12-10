import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { PriceDetailsComponent } from './components/order/price-details/price-details.component';

export const routesConfiguration: Routes = [
    {
        path: '',
        children: [

            {
                path: 'log-in',
                component: LogInComponent,
            },

            {
                path: 'log-in/:code',
                component: LogInComponent,
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
                        path: 'price-details/:c',
                        component: PriceDetailsComponent,
                    },
                    {
                        path: 'order-details',
                        component: PriceDetailsComponent,
                    }
                ]
            }
        ]
    }
];