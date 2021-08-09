import { bottom } from '@popperjs/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import sidebarStyles from './sidebar.module.css';

export default function SideBarAlt() {
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('#btn');

  const [toggle, settoggle] = useState(false);

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
    settoggle(!toggle);
  }

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{
        position: 'fixed',
        width: '200px',
        height: '100%',
      }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          className="nav-item nav-link d-flex justify-content-between text-white"
        >
          Dashboard
          <i className="fas fa-tachometer-alt mt-1" />
        </NavLink>
        <NavLink
          to="/issue"
          className="nav-item nav-link d-flex justify-content-between text-white"
        >
          Issue
          <i className="fas fa-file mt-1" />
        </NavLink>
        <NavLink
          to="/issued"
          className="nav-item nav-link d-flex justify-content-between text-white"
        >
          View Issued
          <i className="far fa-copy mt-1" />
        </NavLink>
        <NavLink
          to="/settings"
          className="nav-item nav-link d-flex justify-content-between text-white"
        >
          Settings
          <i className="fas fa-cog mt-1" />
        </NavLink>
        <li
          className="nav-link text-muted text-white"
          style={{ position: 'absolute', bottom: '10px' }}
        >
          Ver 1.0
        </li>
      </ul>
    </div>
  );
}
