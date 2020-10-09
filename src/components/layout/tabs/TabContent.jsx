import React from 'react';
import { connect } from 'react-redux'
import If from '../../operators/If';


const TabContent = props => {
    const selected = props.id === props.tab.selected
    const visible = props.tab.visible[props.id]


    return (
        <If test={visible}>
            <div id={props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                {props.children}
            </div>
        </If>

    )
}


const mapStateToProps = state => ({ tab: state.tab })



export default connect(mapStateToProps)(TabContent)
