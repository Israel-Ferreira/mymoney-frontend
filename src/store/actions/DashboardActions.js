import DashboardService from '../../services/DashboardService'
import { GET_SUMMARY } from './actionTypes';

const getSummary = async () => {
    const data = await DashboardService.getSummary();
    return {type: GET_SUMMARY, payload: {summary: data}}
}



export {getSummary}