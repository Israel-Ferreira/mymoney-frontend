import React, { Fragment } from 'react'

export default props => (
    <Fragment>
        <li>
            <a href={props.path}>
                <i className={`fa fa-${props.icon}`}></i> 
                <span>{props.label}</span>
            </a>
        </li>
    </Fragment>
)