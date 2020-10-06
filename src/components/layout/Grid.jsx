import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const Grid = props => {
    const toCssClasses = () => {
        const { xs, sm, md, lg } = props
        console.log(md)
        return `col-xs-${xs} col-sm-${sm} col-md-${md} col-lg-${lg}`
    }

    const gridClasses =  toCssClasses()

    return (
        <Fragment>
            <div className={gridClasses}>
                {props.children}
            </div>
        </Fragment>
    )
}

Grid.propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number
}


Grid.defaultProps = {
    xs: 12,
    sm: 8,
    md: 6,
    lg: 4
}


export default Grid