import { GET_SUMMARY } from './actionTypes'

const initialState = {
    summary: {
        credit: 0,
        debt: 0,
        consolidatedValue: 0
    }
}

const DashboardReducer = (state = initialState, action) => {
    console.log(action.payload)

    console.log(action)

    if (action.type === GET_SUMMARY) {
        console.log(state)
        const { summary} = action.payload
        return { ...state, summary }
    }else{
        return state
    }
}

export default DashboardReducer