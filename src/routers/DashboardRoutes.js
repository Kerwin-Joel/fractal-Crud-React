import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import { CreateOrder } from '../components/createOrder/CreateOrder';
import { EditOrder } from '../components/editOrder/EditOrder';
import { Orders } from '../components/Orders';
import { Products } from '../components/Products';
import { Navbar } from '../components/ui/navbar/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route path='/orders' component={Orders} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/editOrder' component={EditOrder} />
                    <Route exact path='/createOrder' component={CreateOrder} />
                </Switch>
            </div>
        </>
    )
}
