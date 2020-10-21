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


export async function remove(values){
    return [
        await submitForm(values, "DELETE", "Ciclo de Pagamento removido com sucesso")
    ]
}


async function selectMethod(values, method) {
    if (method === "POST") {
        return await BillingCycleService.create(values)
    } else if (method === "PUT" || method === "DELETE") {
        const id = values._id

        if(method === "PUT"){
            return await BillingCycleService.update(id,update)
        }else{
            return await BillingCycleService.delete(id)
        }
    }
}


async function submitForm(values, method, successMsg = "Success") {
    try {
        const resp = await selectMethod(values, method)
        const VALID_STATUS = [201, 200, 204]

        if (VALID_STATUS.includes(resp.status)) {
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

