import React from "react";
import Logo from "./assets/img/Logo.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            alt="Logo"
            className="d-inline-block align-text-top"
            style={{ width: "30px", marginRight: "10px" }}
          />
          my-will
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span className="nav-link" href="/">
                <input type="text" id="search"  placeholder="Search"/>
                <i className="bi bi-search"></i>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="/">
                <i class="bi bi-bell-fill"></i>
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link" href="/">
                <i className="bi bi-gear"></i>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="/">
              <i class="bi bi-person"></i>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="/">
                <i className="bi bi-power"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
