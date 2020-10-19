import React from 'react'
import { Field, reduxForm } from 'redux-form'

import LabelAndInput from '../layout/form/LabelAndInput'
import Row from '../layout/Row'

const BillingCycleForm = props => {

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
            </div>
        </form>
    )
}


export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)