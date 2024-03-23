import React from "react";
import "../component/featureSection.css";
import FeatureImg from "../img/feature.png";
import { FaUsers, FaCheck } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <>
      <div className="container-fluid bg-primary feature pt-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Why Choose Us
              </div>
              <h1 className="text-white mb-4">
                Embark on an AI Industry Journey with Innovative Experience
                Concepts
              </h1>
              <p className="text-light mb-4">
                Are you ready to revolutionize the AI industry with
                groundbreaking experience concepts? Step into the future of
                AI-driven technologies and redefine the way users interact,
                learn, and engage with innovative experiences. Together, we can
                pave the way for a new era of AI advancements.
              </p>
              <p className="text-light mb-4">
                Here's how we can make a difference in the AI industry with our
                new experience concepts:
              </p>

              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <i className="fa fa-check"></i>
                </div>
                <span>Immersive Virtual Reality (VR) Experiences</span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <i className="fa fa-check"></i>
                </div>
                <span>Conversational AI Interfaces</span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <i className="fa fa-check"></i>
                </div>
                <span>AI-Driven Personalized Recommendations</span>
              </div>
              <div className="row g-4 pt-3">
                <div className="col-sm-6">
                  <div
                    className="d-flex rounded p-3 cardFeature"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <FaUsers size={48} color="white" />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        1
                      </h2>
                      <p className="text-white mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="d-flex rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <FaCheck size={48} color="white" />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        1
                      </h2>
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 align-self-end text-center text-md-end wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <img className="img-fluid" src={FeatureImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeatureSection;
