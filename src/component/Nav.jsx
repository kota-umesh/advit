import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/advit-logo.png";
import "./nav.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const Nav = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setStickyClass("bg-primary shadow-sm top-0")
        : setStickyClass("relative top-150");
    }
  };

  return (
    <>
      <div
        className={`container-fluid sticky-top ${stickyClass}`}
        // style={{ top: "-150px" }}
      >
        <div className="container">
          {/* <div className="row"> */}
          {/* <div className="col-10 mx-auto"> */}
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            {/* <div className="container-fluid"> */}
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="BrandLogo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav text-white ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/services">
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/webdevelopment">
                        Web Development
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="dropdown-item" to="/mobileapp">
                        Mobile App Development
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    <FaSearch />
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </nav>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Nav;
