import React from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'


const ValueBox = props => {
    return (
        <Grid md={props.md} sm={props.sm} xs={props.sm}>
            <div className={`ValueBox small-box bg-${props.color}`}>
                <div className="inner">
                    <h3>R$ {props.result}</h3>
                    <p>{props.title}</p>
                </div>
                <span className="icon">
                    <i className={`fa fa-${props.icon}`}></i>
                </span>

            </div>
        </Grid>
    )
}

ValueBox.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    result: PropTypes.number
}

ValueBox.defaultProps = {
    color: 'primary',
    icon: 'usd',
    title: 'Valor',
    result: 0
}



export default ValueBox