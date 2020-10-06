import React from 'react'
import Content from '../layout/Content'
import ContentHeader from '../layout/ContentHeader'
import Row from '../layout/Row'
import ValueBox from '../layout/ValueBox'


const Dashboard = props => {
    return (
        <div className="Dashboard">
            <ContentHeader title="Dashboard" breadcrumbTitle="Dashboard" path="#dashboard" />
            <Content>
                <Row>
                    <ValueBox color="green" title="Créditos" icon="bank" />
                    <ValueBox color="red" title="Débitos" icon="credit-card" />
                    <ValueBox color="blue" title="Valor Consolidado" icon="money" />
                </Row>
            </Content>
        </div>
    )
}


export default Dashboard