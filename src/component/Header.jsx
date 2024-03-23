import React from "react";
//import HeroImg from "../img/hero-img.png";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      {/* Header */}
      <div className="container-fluid bg-primary pt-5 mb-5 hero-header">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center mb-lg-5">
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
                Advit
              </div>
              <h1 className="display-4 text-white mb-4 animated slideInRight">
                {props.title}
              </h1>
              <p>{props.para}</p>
              <NavLink
                to="/about"
                className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3"
                style={props.styleBtnHide}
              >
                Read More
              </NavLink>
              <NavLink
                to="/contact"
                className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill"
                style={props.styleBtnHide}
              >
                Contact Us
              </NavLink>
              <nav
                aria-label="breadcrumb"
                className="text-white"
                style={props.breadcombHide}
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink href="#" className="text-white">
                      Home
                    </NavLink>
                  </li>
                  <li
                    className="breadcrumb-item active text-white"
                    aria-current="page"
                  >
                    {props.title}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img
                src={props.heroImg}
                alt=""
                className="img-fluid"
                style={props.imgHeight}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
