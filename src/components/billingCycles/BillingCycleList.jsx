import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getList, showUpdate } from '../../store/actions/BillingCycleActions';
import BillingCycleListItem from './BillingCycleListItem';

const BillingCycleList = props => {
    useEffect(() => {
        props.getListOnInit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const RenderRows =  list => {
        const newList =  list || []
        return newList.map(item => (
            <BillingCycleListItem showUpdate={() => props.showUpdateTab(item)} key={item._id} description={item.name} month={item.month} year={item.year} />
        ))
    }


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
                {RenderRows(props.list)}
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
        }, 
        showUpdateTab: (billingCycle) => {
            const action = showUpdate(billingCycle)
            dispatch(action)
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)

