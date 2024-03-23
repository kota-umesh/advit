import React, { Fragment } from "react";
import Header from "../Header";
import MobileAppImg from "../../img/mobile-app.webp";
import HeroImg from "../../img/hero-img-mobile.png";

const MobileApp = () => {
  return (
    <Fragment>
      <Header
        title="Mobile App Development"
        styleBtnHide={{ display: "none" }}
        heroImg={HeroImg}
        imgHeight={{ maxHeight: "300px", maxWidth: "350px" }}
      />
      {/* About */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div className="about-img">
                <img className="img-fluid" src={MobileAppImg} alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Mobile App Development
              </div>
              <h1 className="mb-4">
                Mobile App Development: Harnessing the Power of Native, React
                Native, and Flutter
              </h1>
              <p className="mb-4">
                In the rapidly evolving world of mobile applications, it's
                crucial to choose the right technology stack to meet your a pp
                development needs. At our company, we specialize in leveraging
                the power of native development, React Native, and Flutter to
                create exceptional mobile experiences. Whether you prefer the
                performance of native development, the cross-platform
                capabilities of React Native, or the flexibility of Flutter, we
                have the expertise to bring your app idea to life.
              </p>
              <p className="mb-4"></p>
              <p className="mb-4"></p>
              <p className="mb-4"></p>
              <p className="mb-4"></p>
              <p className="mb-4"></p>
              <p className="mb-4">
                By offering expertise in native development, React Native, and
                Flutter, we ensure that our clients have access to the right
                technology for their mobile app projects. Whether you need a
                high-performance native app or a cost-effective cross-platform
                solution, we have the skills and experience to deliver
                exceptional results. Our goal is to create mobile applications
                that not only meet your requirements but also provide a
                delightful user experience for your target audience.
              </p>
              <p className="mb-4">
                Contact us today to discuss your mobile app development needs
                and let us help you bring your app idea to reality.
              </p>

              <div className="d-flex align-items-center mt-4">
                {/* <!-- <a className="btn btn-primary rounded-pill px-4 me-3" href="">Read More</a> --> */}
                <a
                  className="btn btn-outline-primary btn-square me-3"
                  href="https://www.facebook.com/profile.php?id=100064228566963"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square me-3"
                  href="https://twitter.com/advit_software"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square me-3"
                  href="https://www.instagram.com/advit_software/?hl=en"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square"
                  href="https://www.linkedin.com/in/advit-software-213343126/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile App content */}
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
    </Fragment>
  );
};

export default MobileApp;
