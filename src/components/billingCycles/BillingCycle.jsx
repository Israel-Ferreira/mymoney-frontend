/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectTab, showTabs } from '../../store/actions/TabActions'

import './BillingCycle.css'


import Content from '../layout/content/Content'
import ContentHeader from '../layout/content/ContentHeader'
import TabContent from '../layout/tabs/TabContent'
import TabHeader from '../layout/tabs/TabHeader'
import Tabs from '../layout/tabs/Tabs'
import TabsContent from '../layout/tabs/TabsContent'
import TabsHeader from '../layout/tabs/TabsHeader'


import BillingCycleList from './BillingCycleList'
import BillingCycleForm from './BillingCycleForm'

import {create, update} from '../../store/actions/BillingCycleSubmitActions'




const BillingCycle = props => {
    useEffect(() => {
        props.initialSelectedTab('tabList')
        props.showTabsFn('tabList', 'tabCreate')
    },[])

    return (
        <div className="BillingCycle">
            <ContentHeader title="Ciclo de Pagamentos" path="#billing-cycles" breadcrumbTitle="Ciclos de Pagamento" />
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader tabTitle="Listar" icon="bars" target="tabList" />
                        <TabHeader tabTitle="Adicionar" icon="plus" target="tabCreate" />
                        <TabHeader tabTitle="Editar" icon="pencil" target="tabEdit" />
                        <TabHeader tabTitle="Deletar" icon="trash-o" target="tabRemove" />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <BillingCycleList />
                        </TabContent>

                        <TabContent id="tabCreate">
                            <h1>Incluir Ciclo de Pagamento</h1>
                            <BillingCycleForm onSubmit={props.createBillingCycle} />
                        </TabContent>
                        <TabContent id="tabEdit">
                            <h1>Editar Ciclo de Pagamento</h1>
                            <BillingCycleForm onSubmit={props.updateBillingCycle}  />
                        </TabContent>
                        <TabContent id="tabRemove">
                            <h1>Remover Ciclo de Pagamento</h1>
                        </TabContent>


                    </TabsContent>

                </Tabs>
            </Content>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        initialSelectedTab: (target) => {
            const action = selectTab(target)
            dispatch(action)
        },
        showTabsFn: (...tabIds) => {
            const action = showTabs(tabIds)
            dispatch(action)
        }, 
        createBillingCycle: async (values) => {
            const action = await create(values)
            dispatch(action)
        },
        updateBillingCycle: async (values) => {
            const action = await update(values)
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(BillingCycle)