import React from 'react'
import { Field, reduxForm } from 'redux-form'

const BillingCycleForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="box-body">
                <Field name="name" component="input" className="form-control" />
                <Field name="month" component="input" className="form-control" />
                <Field name="year" component="input" className="form-control" />
            </div>
            <div className="box-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}


export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)