import React from 'react';

function NavBarStyle() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">PLC & Instrumentation</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page 3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarStyle;
