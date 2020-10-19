import {toastr} from 'react-redux-toastr'
import { getErrorsMessages } from '../../components/layout/msg/Messages'
import BillingCycleService from '../../services/BillingCycleService'
import { BILLING_CYCLES_FETCHED } from './actionTypes'

export async function getList() {
    const list = await BillingCycleService.getAll()
    return { type: BILLING_CYCLES_FETCHED, payload: list }
}

export async function create(values) {
    try {
        const resp = await BillingCycleService.create(values)

        if (resp.status === 201) {
            toastr.success('Sucesso', 'Ciclo de pagamento adicionado com sucesso')
            return { type: 'FORM_SUBMITTED', payload: resp.data }
        }

    } catch (err) {
        console.log(err.response.data)
        const {errors} = err.response.data
        getErrorsMessages(errors).map(err => toastr.error('Erro', err))
        return {type: 'FORM_REJECTED'}
    }
}