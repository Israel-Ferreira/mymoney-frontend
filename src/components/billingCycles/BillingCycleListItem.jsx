import React from 'react';

export default props => (
    <tr role="row">
        <td className="sorting_1">{props.description}</td>
        <td>{props.month}</td>
        <td>{props.year}</td>
        <td className="bc-actions">
            <button href="#!" className="btn btn-warning" onClick={props.showUpdate}>
                <i className="fa fa-pencil"></i>
            </button>
            <a href="#!" className="btn btn-danger">
                <i className="fa fa-trash-o"></i>
            </a>
        </td>
    </tr>
)
