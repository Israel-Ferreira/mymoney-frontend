import { BILLING_CYCLES_FETCHED } from "../actions/actionTypes";

const initialState = {
    list: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case BILLING_CYCLES_FETCHED:
            return{...state, list: action.payload}
        default: 
            return state
    }
}