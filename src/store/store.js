import {createStore,combineReducers} from 'redux'
import DashboardReducer from './reducers/DashboardReducer'



const reducers  =  combineReducers({
    dashboard: DashboardReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const Store =  createStore(reducers,devTools)

export default Store