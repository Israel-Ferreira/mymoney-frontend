import { GET_SUMMARY } from '../actions/actionTypes'

const initialState = {
    summary: {
        credit: 0,
        debt: 0,
        consolidatedValue: 0
    }
}

const DashboardReducer = (state = initialState, action) => {
    if (action.type === GET_SUMMARY) {
        const { summary} = action.payload
        return { ...state, summary }
    }else{
        return state
    }
}

export default DashboardReducer