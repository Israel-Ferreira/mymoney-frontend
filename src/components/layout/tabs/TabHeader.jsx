import React, { Fragment } from 'react';

const TabHeader = props => {
    return (
        <Fragment>
            <li>
                <a href="#!" data-toggle="tab" aria-expanded="false" data-target={props.target}>
                    <i className={`fa fa-${props.icon}`}></i>
                    {props.tabTitle}
                </a>
            </li>
        </Fragment>
    )
}


export default TabHeader