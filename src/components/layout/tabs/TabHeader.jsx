import React, { Fragment } from 'react';
import { connect } from 'react-redux'

import { selectTab } from '../../../store/actions/TabActions'
import If from '../../operators/If'

const TabHeader = props => {
    const selected = props.tab.selected === props.target ? 'active' : ''
    const visible = props.tab.visible[props.target]
    return (
        <Fragment>
            <If test={visible}>
                <li className={selected}>
                    <a href="#!" data-toggle="tab" aria-expanded="false" data-target={props.target} onClick={() => props.changeTab(props.target)}>
                        <i className={`fa fa-${props.icon}`}></i>
                        {props.tabTitle}
                    </a>
                </li>
            </If>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return { tab: state.tab }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTab: (tabId) => {
            const action = selectTab(tabId)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)