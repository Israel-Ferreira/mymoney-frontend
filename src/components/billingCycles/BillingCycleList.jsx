import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../store/actions/BillingCycleActions';
import BillingCycleListItem from './BillingCycleListItem';

const BillingCycleList = props => {
    useEffect(() => {
        props.getListOnInit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <table className="table table-bordered table-hover dataTable">
            <thead>
                <tr role="row">
                    <th>Nome</th>
                    <th>Mês</th>
                    <th>Ano</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(bc => <BillingCycleListItem key={bc._id} description={bc.name} month={bc.month} year={bc.year} />)}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => {
    const { list } = state.billingCycle
    return { list }
}

const mapDispatchToProps = dispatch => {
    return {
        getListOnInit: async () => {
            const action = await getList()
            dispatch(action)
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)

