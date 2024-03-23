import React from "react";
import "../component/sectionImg.css";
import {
  FaCheck,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const DesCard = () => {
  return (
    <>
      <div
        className="col-lg-6 wow fadeIn"
        data-wow-delay="0.5s"
        //style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
      >
        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
          About Us
        </div>
        <h1 className="mb-4">
          Empower Your Business with Artificial Intelligence: Smart Solutions
          for Success
        </h1>
        <p className="mb-4">
          Are you ready to elevate your business to new heights? Experience the
          transformative power of Artificial Intelligence (AI) and unlock a
          world of intelligent possibilities. At Advit Softwares Solutions, we
          specialize in making businesses smarter through AI-driven solutions.
        </p>
        <p className="mb-4">
          With our cutting-edge AI technology and expertise, we can
          revolutionize your operations, enhance decision-making, and drive
          remarkable growth. Here's how we can help:.
        </p>

        <div className="row g-3">
          <div className="col-sm-6">
            <h6 className="mb-3">
              <FaCheck className="text-primary me-2" />
              Intelligent Automation
            </h6>
            <h6 className="mb-0">
              <FaCheck className="text-primary me-2" />
              Advanced Analytics
            </h6>
          </div>
          <div className="col-sm-6">
            <h6 className="mb-3">
              <FaCheck className="text-primary me-2" />
              Personalize User Experiences
            </h6>
            <h6 className="mb-0">
              <FaCheck className="text-primary me-2" />
              Predictive Capabilities
            </h6>
          </div>
          <div className="col-sm-6">
            <h6 className="mb-3">
              <FaCheck className="text-primary me-2" />
              Enhance Security
            </h6>
            <h6 className="mb-0">
              <FaCheck className="text-primary me-2" />
              Natural Language Processing
            </h6>
          </div>
          <div className="col-sm-6">
            <h6 className="mb-3">
              <FaCheck className="text-primary me-2" />
              Automate Tasks and Processes
            </h6>
            <h6 className="mb-0">
              <FaCheck className="text-primary me-2" />
              Gain Valuable Insights
            </h6>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
          <a className="btn btn-primary rounded-pill px-4 me-3" href="/">
            Read More
          </a>
          <a
            className="btn btn-outline-primary rounded-circle me-3"
            href="https://www.facebook.com/profile.php?id=100064228566963"
          >
            <FaFacebookF className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-outline-primary rounded-circle me-3"
            href="https://twitter.com/advit_software"
          >
            <FaTwitter />
          </a>
          <a
            className="btn btn-outline-primary rounded-circle me-3"
            href="https://www.instagram.com/advit_software/?hl=en"
          >
            <FaInstagram />
          </a>
          <a
            className="btn btn-outline-primary rounded-circle"
            href="https://www.linkedin.com/in/advit-software-213343126/"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
};

export default DesCard;
