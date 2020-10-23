import React from 'react';

export default props => (
    <button className={`btn btn-${props.color}`} type={props.type || 'button'} onClick={() => props.handleClick()}>
        <i className={`fa fa-${props.icon}`}></i>
    </button>
)
