/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default (props) => (
  <header className="main-header">
    <a href="#" className="logo">
      <span className="logo-mini">
        <b>My</b>M
      </span>
      <span className="logo-lg">
        <i className="fa fa-money"></i>
        <b>My</b> Money
      </span>
    </a>
    <nav className="navbar navbar-static-top" role="navigation">
      <a
        href="#"
        className="sidebar-toggle"
        data-toggle="offcanvas"
        role="button"
      >
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown messages-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-envelope-o"></i>
              <span className="label label-success">4</span>
            </a>
          </li>

          <li className="dropdown notifications-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-bell-o"></i>
              <span className="label label-warning">10</span>
            </a>
          </li>
          <li className="dropdown tasks-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-flag-o"></i>
              <span className="label label-danger">9</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
