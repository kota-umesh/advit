import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import Pdata from "./ProjectsData";
import HeroImg from "../img/hero-img-projects.png";

const Projects = () => {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Projects</h1> */}
      <Header
        title="Products Development"
        styleBtnHide={{ display: "none" }}
        heroImg={HeroImg}
        imgHeight={{ maxHeight: "300px", maxWidth: "350px" }}
      />
      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow  animated"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "500px",
              visibility: "visible",
              animationDelay: "0.1s",
            }}
          >
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Case Study
            </div>
            <h1 className="mb-4">Explore Our Recent AI - Mobile App </h1>
          </div>
          <div className="row g-4">
            {Pdata.map((val) => {
              return (
                <ProjectCard
                  imgsrc={val.imgsrc}
                  pname={val.pname}
                  desc={val.desc}
                  links={val.links}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* moblie Application */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "500px",
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Mobile App Development Services
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="accordion" id="accordionFAQ1">
                <div
                  className="accordion-item wow fadeIn"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeIn",
                  }}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Native App Development
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div className="accordion-body">
                      Native app development involves creating applications
                      specifically for a particular operating system, such as
                      iOS or Android. Our team of skilled native developers
                      utilizes the native programming languages and development
                      frameworks, such as Swift for iOS and Java/Kotlin for
                      Android, to build apps that fully leverage the
                      capabilities of each platform. Native apps are known for
                      their high performance, seamless integration with device
                      features, and access to the latest OS updates and
                      functionalities.
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item wow fadeIn"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeIn",
                  }}
                >
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Flutter Development
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div className="accordion-body">
                      Flutter is an open-source UI toolkit developed by Google
                      that enables the creation of beautiful, natively compiled
                      applications for multiple platforms from a single
                      codebase. Flutter uses Dart as its programming language
                      and provides a rich set of pre-designed widgets and tools
                      for building stunning user interfaces. With Flutter, we
                      can develop apps that run smoothly on iOS, Android, and
                      even the web. It offers fast development cycles, excellent
                      performance, and a visually appealing user interface.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="accordionFAQ2">
                <div
                  className="accordion-item wow fadeIn"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeIn",
                  }}
                >
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      React Native Development
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div className="accordion-body">
                      React Native is a popular cross-platform framework that
                      allows us to build mobile apps using JavaScript. With
                      React Native, we can develop a single codebase that can be
                      deployed on both iOS and Android platforms. This approach
                      offers significant time and cost savings while still
                      delivering a native-like user experience. React Native
                      apps are known for their responsiveness, code reusability,
                      and ability to access platform-specific APIs.
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

export default Projects;
