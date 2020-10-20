import { initialize  } from 'redux-form'


import BillingCycleService from '../../services/BillingCycleService'
import { BILLING_CYCLES_FETCHED } from './actionTypes'
import { selectTab, showTabs } from './TabActions'


export const FORM = 'billingCycleForm'

const INITIAL_VALUES = {

}


export async function init() {
    return [
        showTabs(['tabList', 'tabCreate']),
        selectTab('tabList'),
        await getList(),
        initialize(FORM, INITIAL_VALUES)
    ]
}


export async function getList() {
    const list = await BillingCycleService.getAll()
    return { type: BILLING_CYCLES_FETCHED, payload: list }
}



export function showUpdate(billingCycle) {
    return [
        showTabs(['tabEdit']),
        selectTab('tabEdit'),
        initialize(FORM, billingCycle)
    ]
}


