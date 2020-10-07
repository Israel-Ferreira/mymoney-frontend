import DashboardService from '../../services/DashboardService'
import { GET_SUMMARY } from '../reducers/actionTypes';

const getSummary = async () => {
    const data = await DashboardService.getSummary();
    return {type: GET_SUMMARY, payload: {summary: data}}
}

export {getSummary}