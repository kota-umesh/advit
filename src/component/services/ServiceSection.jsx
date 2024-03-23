import React from "react";
import { FaRobot, FaGraduationCap, FaPowerOff, FaBrain } from "react-icons/fa";
import "./serviceSection.css";

const ServiceSection = () => {
  return (
    <>
      <div className="container-fluid bg-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-5 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Services
              </div>
              <h1 className="mb-4">
                Discover Exceptional AI Solutions for Your Business
              </h1>
              <p className="mb-4">
                Are you ready to unleash the full potential of Artificial
                Intelligence (AI) for your business? Look no further! At Advit
                Software Solutions, we offer a range of excellent AI solutions
                that can revolutionize the way you operate and drive your
                business forward.
              </p>
              {/* <!-- <a className="btn btn-primary rounded-pill px-4" href="">Read More</a> --> */}
              <p className="mb-4">
                At Advit Software Solutions, we pride ourselves on delivering
                excellent AI solutions tailored to your specific business needs.
                Our team of AI experts will work closely with you to understand
                your objectives and design customized solutions that align with
                your goals.
              </p>
              <p className="mb-4">
                Don't miss out on the transformative power of AI for your
                business. Contact us today to explore how our excellent AI
                solutions can take your business to new heights.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeIn",
                      }}
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FaRobot size="32" />
                        </div>
                        <h5 className="mb-3">
                          Revitalize Your Website with AI-Powered Transformation
                        </h5>
                        <p>
                          Go existing website to the next level? Experience the
                          cutting-edge innovation of AI with our AI-powered
                          website transformation services.{" "}
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="/">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.5s"
                      //style={{'visibility: visible; animation-delay: 0.5s; animation-name: fadeIn'}}
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FaPowerOff size="32" />
                        </div>
                        <h5 className="mb-3">
                          Transform Your Mobile Apps with AI-Powered
                          Capabilities
                        </h5>
                        <p>
                          Embrace the power of AI to revolutionize your mobile
                          app experience.
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="/">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-md-4">
                  <div className="row g-4">
                    <div
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.3s"
                      //style={{"visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;"}}
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FaGraduationCap size="32" />
                        </div>
                        <h5 className="mb-3">
                          Revolutionize Education &amp; Science with AI-Powered
                          Applications
                        </h5>
                        <p>
                          Unlock the full potential of AI by transforming your
                          applications into AI-powered tools that revolutionize
                          learning and scientific advancements.
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="/">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.7s"
                      //style={{"visibility: visible; animation-delay: 0.7s; animation-name: fadeIn;"
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FaBrain size="32" />
                        </div>
                        <h5 className="mb-3">
                          Elevate Your Digital Marketing with AI-Powered
                          Solutions
                        </h5>
                        <p>
                          By converting your digital marketing to AI-powered
                          solutions, you can unlock new levels of precision,
                          efficiency, and success.
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="/">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
