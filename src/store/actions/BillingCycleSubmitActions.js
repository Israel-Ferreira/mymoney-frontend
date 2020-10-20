import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'

import BillingCycleService from '../../services/BillingCycleService'
import {init, FORM} from './BillingCycleActions'
import {getErrorsMessages} from '../../components/layout/msg/MessagesFunc'


export async function update(values) {
    return await submitForm(values, "PUT", "Ciclo de Pagamento atualizado com sucesso")
}


export async function create(values){
    return await submitForm(values, "POST", "Ciclo de Pagamento adicionado com sucesso")
}


async function selectMethod(values, method) {
    if (method === "POST") {
        return await BillingCycleService.create(values)
    } else if (method === "PUT") {
        const id = values._id
        return await BillingCycleService.update(id, values)
    }
}

async function submitForm(values, method, successMsg = "Success") {
    try {
        const resp = await selectMethod(values, method)

        if (resp.status === 201 || resp.status === 200) {
            toastr.success('Sucesso', successMsg)
            return [
                { type: 'FORM_SUBMITTED', payload: resp.data },
                resetForm(FORM),
                await init()
            ]
        }

    } catch (err) {
        const {errors} = err.response.data
        getErrorsMessages(errors).map(err => toastr.error('Erro', err))
        return { type: 'FORM_REJECTED' }
    }
}

