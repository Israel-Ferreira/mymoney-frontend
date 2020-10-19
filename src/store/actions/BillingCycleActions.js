import {toastr} from 'react-redux-toastr'
import {initialize, reset as resetForm} from 'redux-form'


import { getErrorsMessages } from '../../components/layout/msg/Messages'
import BillingCycleService from '../../services/BillingCycleService'
import { BILLING_CYCLES_FETCHED } from './actionTypes'
import { selectTab, showTabs } from './TabActions'


const FORM = 'billingCycleForm'

const INITIAL_VALUES = {

}


export async function init(){
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

export async function create(values) {
    try {
        const resp = await BillingCycleService.create(values)

        if (resp.status === 201) {
            toastr.success('Sucesso', 'Ciclo de pagamento adicionado com sucesso')
            return [
                { type: 'FORM_SUBMITTED', payload: resp.data },
                resetForm(FORM),
                await init()
            ]
        }


    } catch (err) {
        const {errors} = err.response.data
        getErrorsMessages(errors).map(err => toastr.error('Erro', err))
        return {type: 'FORM_REJECTED'}
    }
}


export function showUpdate(billingCycle){
    return [
        showTabs(['tabEdit']), 
        selectTab('tabEdit'),
        initialize(FORM, billingCycle)
    ]
}


export function update(values){

}

