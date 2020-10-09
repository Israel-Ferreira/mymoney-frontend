import React from 'react';

export default props => (
    <tr role="row">
        <td className="sorting_1">{props.description}</td>
        <td>{props.month}</td>
        <td>{props.year}</td>
        <td className="bc-actions">
            <a href="#!" className="btn btn-warning">
                <i className="fa fa-pencil"></i>
            </a>
            <a href="#!" className="btn btn-danger">
                <i className="fa fa-trash-o"></i>
            </a>
        </td>
    </tr>
)
