import {createStore,combineReducers} from 'redux'
import {reducer  as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'



import BillingCycleReducer from './reducers/BillingCycleReducer'

import DashboardReducer from './reducers/DashboardReducer'
import TabReducer from './reducers/TabReducer'




const reducers  =  combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const Store =  createStore(reducers,devTools)

export default Store