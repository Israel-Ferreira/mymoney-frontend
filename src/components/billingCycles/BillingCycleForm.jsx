import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import LabelAndInput from '../layout/form/LabelAndInput'
import Row from '../layout/Row'
import { init } from '../../store/actions/BillingCycleActions'

let BillingCycleForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="box-body">
                <Row>
                    <Field name="name"
                        component={LabelAndInput} label="Nome"
                        placeholder="Informe o nome"
                    />
                    <Field name="month"
                        component={LabelAndInput}
                        label="Mês"
                        type="number"
                        placeholder="Informe o mês"
                    />
                    <Field name="year"
                        component={LabelAndInput}
                        label="Ano"
                        type="number"
                        placeholder="Informe o Ano"
                    />
                </Row>

            </div>
            <div className="box-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger" onClick={props.initHome} >Cancelar</button>
            </div>
        </form>
    )
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })
(BillingCycleForm)

const mapDispatchToProps = dispatch => {
    return {
        initHome: async () => {
            const action = await init()
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(BillingCycleForm)