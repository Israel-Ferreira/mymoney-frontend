import React, { useEffect, useState } from 'react'

import Content from '../layout/content/Content'
import ContentHeader from '../layout/content/ContentHeader'
import Row from '../layout/Row'
import ValueBox from '../layout/ValueBox'
import DashboardService from '../../services/DashboardService'


const Dashboard = props => {

    const [summary, setSummary] = useState({credit: 0, debt: 0, consolidatedValue: 0})

    useEffect(() => {

        const fetchSummary = async () => {
            const data =  await DashboardService.getSummary()
            setSummary({...data, consolidatedValue: data.credit - data.debt})
        }

        fetchSummary()
    },[])


    const {credit, debt, consolidatedValue} = summary


    return (
        <div className="Dashboard">
            <ContentHeader title="Dashboard" breadcrumbTitle="Dashboard" path="#dashboard" />
            <Content>
                <Row>
                    <ValueBox color="green" title="Créditos" icon="bank" result={credit} />
                    <ValueBox color="red" title="Débitos" icon="credit-card" result={debt} />
                    <ValueBox color="blue" title="Valor Consolidado" icon="money" result={consolidatedValue} />
                </Row>
            </Content>
        </div>
    )
}




export default Dashboard