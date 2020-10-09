import BillingCycleService  from '../../services/BillingCycleService'
import { BILLING_CYCLES_FETCHED } from './actionTypes'

export async function getList(){
    const list =  await BillingCycleService.getAll()
    return {type: BILLING_CYCLES_FETCHED, payload: list}
}