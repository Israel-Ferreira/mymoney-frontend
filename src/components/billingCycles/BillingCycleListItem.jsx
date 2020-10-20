import React from 'react';

import IconButton from '../buttons/IconButton'

export default props => (
    <tr role="row">
        <td className="sorting_1">{props.description}</td>
        <td>{props.month}</td>
        <td>{props.year}</td>
        <td className="bc-actions">
            <IconButton icon="pencil" color="warning" handleClick={props.showUpdate} />
            <IconButton icon="trash-o" color="danger"  handleClick={props.showDelete} />
        </td>
    </tr>
)
