import React from 'react'
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom'

import BillingCycle from './components/billingCycles/BillingCycle'
import Dashboard from './components/dashboard/Dashboard'




export default props => (
    <HashRouter>
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/billing-cycles" component={BillingCycle} />
            <Redirect  from="*" to="/dashboard" />
        </Switch>
    </HashRouter>
)


