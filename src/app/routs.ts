   import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';

   export const routesConfiguration: Routes = [
    {
        path: '',
        children: [
            {
                path: 'log-in',
                component:LogInComponent,
            },
            {
                path: 'order',
                component:OrderComponent,
                children: [
                    {
                        path: 'newOrder',
                        component:OrderDetailsComponent,
                    },
                    {
                        path: ':id',
                        component:OrderDetailsComponent,
                    }
                ]
            }
        ]
    }
];