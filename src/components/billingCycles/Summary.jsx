import React from 'react';

import Grid from '../layout/Grid'
import Row from '../layout/Row';
import ValueBox from '../layout/ValueBox'

export default ({credit, debit}) => (
    <Grid md={12}>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox title="Créditos" icon="bank" color="green" result={credit}  />
                <ValueBox  title="Debitos" icon="credit-card" color="red" result={debit} />
                <ValueBox title="Valor Consolidado" icon="money" color="blue" result={credit - debit} />
            </Row>
        </fieldset>
    </Grid>
)
