import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-bottom">
      <div className="container pt-2">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img
                src="images\logo.svg"
                alt="logo"
                style={{ height: "20px" }}
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
              className="ps-3"
              >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" className="pe-2">
                  <Link class="nav-link" to="/signup">Signup</Link>
                </li>
                <li class="nav-item" className="pe-2">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item" className="pe-2">
                  <Link class="nav-link" to="/product">Products</Link>
                </li>
                <li class="nav-item" className="pe-2">
                  <Link class="nav-link" to="/pricing">Pricing</Link>
                </li>
                <li class="nav-item" className="pe-2">
                  <Link class="nav-link" to="/support">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
