import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'

import Input from '../layout/form/Input'
import IconButton from '../buttons/IconButton'

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