import {createStore,combineReducers} from 'redux'
import BillingCycleReducer from './reducers/BillingCycleReducer'
import DashboardReducer from './reducers/DashboardReducer'
import TabReducer from './reducers/TabReducer'



const reducers  =  combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const Store =  createStore(reducers,devTools)

export default Store