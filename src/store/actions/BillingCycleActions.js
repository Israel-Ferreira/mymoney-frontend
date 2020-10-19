import {toastr} from 'react-redux-toastr'
import {reset as resetForm} from 'redux-form'


import { getErrorsMessages } from '../../components/layout/msg/Messages'
import BillingCycleService from '../../services/BillingCycleService'
import { BILLING_CYCLES_FETCHED } from './actionTypes'
import { selectTab, showTabs } from './TabActions'


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
                await getList(),
                resetForm('billingCycleForm'),
                selectTab('tabList')
            ]
        }


    } catch (err) {
        console.log(err.response.data)
        const {errors} = err.response.data
        getErrorsMessages(errors).map(err => toastr.error('Erro', err))
        return {type: 'FORM_REJECTED'}
    }
}


export function showUpdate(billingCycle){
    return [showTabs(['tabEdit']), selectTab('tabEdit')]
}