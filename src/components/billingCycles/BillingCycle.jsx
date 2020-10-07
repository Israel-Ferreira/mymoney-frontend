import React from 'react'
import Content from '../layout/content/Content'
import ContentHeader from '../layout/content/ContentHeader'
import TabHeader from '../layout/tabs/TabHeader'
import Tabs from '../layout/tabs/Tabs'
import TabsContent from '../layout/tabs/TabsContent'
import TabsHeader from '../layout/tabs/TabsHeader'


export default props => (
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

                </TabsContent>

            </Tabs>
        </Content>
    </div>
)