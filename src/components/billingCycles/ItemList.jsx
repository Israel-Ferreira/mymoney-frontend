import React from 'react'
import { connect } from 'react-redux'
import { arrayInsert, arrayRemove } from 'redux-form'
import PropTypes from 'prop-types'



import { FORM } from '../../store/actions/BillingCycleActions'

import Grid from '../layout/Grid'
import Item from './Item'



const ItemList = props => {

    const clone = (index, item) => {
        add(index, item, props.type)
    }


    const add = (index, item = {}) => {
        if (!props.readOnly) {
            props.addItem(index, item, props.type)
        }
    }

    const remove = (index) => {
        if (props.list.length > 1) {
            props.removeItem(index, props.type)
        }
    }

    const RenderRows = () => {
        const list = props.list
        return list.map((item, index) => {
            return (
                <Item
                    type={props.type}
                    key={index}
                    index={index}
                    item={item}
                    readOnly={props.readOnly}
                    handleRemove={() => remove(index)}
                    handleAdd={() => add(index + 1)}
                    handleClone={() => clone(index, item)}
                />
            )
        })
    }

    return (
        <Grid md={12}>
            <fieldset>
                <legend>{props.title}</legend>
                <table className="table item-list-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {RenderRows()}
                    </tbody>
                </table>
            </fieldset>
        </Grid>
    )
}

ItemList.propTypes = {
    type: (props, propName, componentName) => {
        const VALID_TYPES = ['credits', 'debits']
        if (!VALID_TYPES.includes(props[propName])) {
            return new Error(`Propiedade ${propName} inválida no componente ${componentName}`)
        }
    },
    title: PropTypes.string
}



ItemList.defaultProps = {
    list: []
}


const mapDispatchToProps = dispatch => {
    return {
        addItem: (index, item, type) => {
            const action = arrayInsert(FORM, type, index, item)
            dispatch(action)
        },
        removeItem: (index, type) => {
            const action = arrayRemove(FORM, type, index)
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemList)