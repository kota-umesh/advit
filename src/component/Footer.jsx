import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/advit-logo.png";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <NavLink to="index.html" className="d-inline-block mb-3">
                {/* <!-- <h1 className="text-white">AI<span className="text-primary">.</span>Tech</h1> --> */}
                <img className="img-fluid" src={Logo} alt="Brand" />
              </NavLink>
              <p className="mb-0">
                Imagine the possibilities of integrating cutting-edge AI
                technology into your existing mobile app. With AI, you can
                unlock a whole new realm of possibilities and drive
                unprecedented growth and success.
              </p>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <FaMapMarkerAlt className="me-3" />
                Fair View Plaza, Himayatnagar, Hyderabad, Telangana, INDIA.
              </p>
              <p>
                <FaPhoneAlt className="me-3" />
                +91 90002 5554
              </p>
              <p>
                <FaEnvelope className="me-3" />
                info@advisoft.com
              </p>
              <div className="d-flex pt-2">
                <NavLink
                  className="btn btn-outline-light btn-social"
                  to="https://twitter.com/advit_software"
                >
                  <FaTwitter />
                </NavLink>
                <NavLink
                  className="btn btn-outline-light btn-social"
                  to="https://www.facebook.com/profile.php?id=100064228566963"
                >
                  <FaFacebookF />
                </NavLink>
                {/* <!-- <NavLink className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></a> --> */}
                <NavLink
                  className="btn btn-outline-light btn-social"
                  to="https://www.instagram.com/advit_software/?hl=en"
                >
                  <FaInstagram />
                </NavLink>
                <NavLink
                  className="btn btn-outline-light btn-social"
                  to="https://www.linkedin.com/in/advit-software-213343126/"
                >
                  <FaLinkedinIn />
                </NavLink>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow animated fadeIn"
              onClick={props.top}
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <h5 className="text-white mb-4">Popular Link</h5>
              <NavLink className="btn btn-link" to="/about">
                About Us
              </NavLink>
              <NavLink className="btn btn-link" to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="btn btn-link" to="/privacy">
                Privacy Policy
              </NavLink>
              <NavLink className="btn btn-link" to="/terms">
                Terms &amp; Condition
              </NavLink>
              <NavLink className="btn btn-link" to="/career">
                Career
              </NavLink>
            </div>
            <div
              className="col-md-6 col-lg-3  wow fadeIn"
              onClick={props.top}
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeIn",
              }}
            >
              <h5 className="text-white mb-4">Our Services</h5>
              <NavLink className="btn btn-link" to="/services">
                Website with AI{" "}
              </NavLink>
              <NavLink className="btn btn-link" to="/services">
                Mobile Apps with AI Capabilities
              </NavLink>
              <NavLink className="btn btn-link" to="/services">
                Education &amp; Science with AI{" "}
              </NavLink>
              <NavLink className="btn btn-link" to="/services">
                Data Science with AI
              </NavLink>
              <NavLink className="btn btn-link" to="/services">
                Digital Marketing with AI
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className="container  wow fadeIn"
          data-wow-delay="0.1s"
          style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeIn",
          }}
        >
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <NavLink className="border-bottom" to="https://advitsoft.com">
                  Advit
                </NavLink>
                , All Right Reserved.
                {/* <!-- Designed By <a className="border-bottom" to="https://advitsoft.com">ADVIT</a> --> */}
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/">Chatbot</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
