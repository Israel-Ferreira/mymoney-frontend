import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import LabelAndInput from '../layout/form/LabelAndInput'
import Row from '../layout/Row'
import { FORM, init } from '../../store/actions/BillingCycleActions'

import ItemList from './ItemList'
import Summary from './Summary'
import { useEffect } from 'react'

let BillingCycleForm = props => {
    
    const calculateSummary =  () => {
        const sum =  (x,y) => x + y
        

        const debitsRes =  props.debits.map(debit => +debit.value || 0).reduce(sum)
        const creditRes =  props.credits.map(credit => +credit.value || 0).reduce(sum)

        return {debit: debitsRes, credit: creditRes}
    }




    const {credit, debit} =  calculateSummary()


    return (
        <form onSubmit={props.handleSubmit} >
            <div className="box-body">
                <Row>
                    <Field name="name"
                        component={LabelAndInput} label="Nome"
                        placeholder="Informe o nome"
                        readOnly={props.readOnly}
                    />
                    <Field name="month"
                        component={LabelAndInput}
                        label="Mês"
                        type="number"
                        placeholder="Informe o mês"
                        readOnly={props.readOnly}
                    />
                    <Field name="year"
                        component={LabelAndInput}
                        label="Ano"
                        type="number"
                        placeholder="Informe o Ano"
                        readOnly={props.readOnly}
                    />
                </Row>
                <Row>
                    <Summary credit={credit} debit={debit} />
                </Row>
                <Row>
                    <ItemList title="Créditos" readOnly={props.readOnly} list={props.credits}  type='credits' />
                    <ItemList title="Débitos" readOnly={props.readOnly} type='debits' list={props.debits} />
                </Row>

            </div>
            <div className="box-footer">
                <button type="submit" className={`btn btn-${props.submitColor}`}>{props.submitText}</button>
                <button type="button" className="btn" onClick={props.initHome} >Cancelar</button>
            </div>
        </form>
    )
}


BillingCycleForm.defaultProps = {
    readOnly: false,
    submitColor: 'primary',
    submitText: 'Adicionar'
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

const selector = formValueSelector(FORM)

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits')
})

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)