import React from 'react'
import { Field, } from 'redux-form'
import PropTypes from 'prop-types'

import Input from '../layout/form/Input'
import IconButton from '../buttons/IconButton'
import If from '../operators/If'




const StatusField = ({ fieldType, index }) => {
    return (
        <If test={fieldType === "debits"}>
            <Field name={`${fieldType}[${index}].status`} component="select" className="form-control">
                <option selected value="PENDENTE">PENDENTE</option>
                <option value="PAGO">PAGO</option>
                <option value="AGENDADO">AGENDADO</option>
            </Field>
        </If>
    )
}


const Item = props => {
    return (
        <tr>
            <td className="item-list-column">
                <Field
                    name={`${props.type}[${props.index}].name`}
                    component={Input}
                    placeholder="Informe o nome"
                    readOnly={props.readOnly}
                />
            </td>
            <td className="item-list-column">
                <Field
                    name={`${props.type}[${props.index}].value`}
                    type="number"
                    component={Input}
                    placeholder="Informe o Valor"
                    readOnly={props.readOnly}
                />
            </td>
            <td className="item-list-column">
                <StatusField fieldType={props.type} index={props.index}  />
            </td>
            <td className="bc-actions">
                <IconButton type="button" icon="plus" color="success" handleClick={props.handleAdd} />
                <IconButton type="button" icon="clone" color="warning" handleClick={props.handleClone} />
                <IconButton icon="trash-o" color="danger" handleClick={props.handleRemove} />
            </td>


        </tr>
    )

}

Item.propTypes = {
    handleAdd: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleClone: PropTypes.func,
    readOnly: PropTypes.bool,
    type: PropTypes.string
}


export default Item