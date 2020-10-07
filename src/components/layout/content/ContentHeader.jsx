import React from 'react'

export default props => (
    <section className="content-header">
        <h1>{props.title}</h1>
        <ol className="breadcrumb">
            <li>
                <a href="#dashboard">
                    Home
                </a>
            </li>
            <li className="active">
                <a href={props.path}>
                    {props.breadcrumbTitle}
                </a>
            </li>
        </ol>
    </section>
)