import { initialize } from 'redux-form'


import BillingCycleService from '../../services/BillingCycleService'
import { BILLING_CYCLES_FETCHED } from './actionTypes'
import { selectTab, showTabs } from './TabActions'


export const FORM = 'billingCycleForm'

const INITIAL_VALUES = {
    credits: [{}],
    debits: [{}]
}


export async function init() {
    return [
        initialize(FORM, INITIAL_VALUES),
        showTabs(['tabList', 'tabCreate']),
        selectTab('tabList'),
        await getList(),
        
    ]
}


export async function getList() {
    const list = await BillingCycleService.getAll()
    return { type: BILLING_CYCLES_FETCHED, payload: list }
}


export function showUpdate(billingCycle) {
    return showTab('tabEdit', billingCycle)
}


export function showRemove(billingCycle){
    return showTab('tabRemove', billingCycle)
}

function showTab(id, billingCycle) {
    return [showTabs([id]), selectTab(id), initialize(FORM, billingCycle)]
}




