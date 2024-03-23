import React, { Fragment } from "react";
import projectImg from "../../img/project-3.jpg";
import Header from "../Header";
import HeroImg from "../../img/hero-img-web.png";

const WebDevlopment = () => {
  return (
    <Fragment>
      <Header
        title="Web Development"
        styleBtnHide={{ display: "none" }}
        heroImg={HeroImg}
        imgHeight={{ maxHeight: "300px", maxWidth: "350px" }}
      />
      {/* about web */}
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
                <img className="img-fluid" src={projectImg} alt="" />
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
                Web Development
              </div>
              <h1 className="mb-4">
                Web Development Services: Creating Digital Experiences That
                Inspire
              </h1>
              <p className="mb-4">
                Welcome to our web development services, where we transform your
                digital vision into stunning reality. In today's interconnected
                world, having a compelling online presence is essential for
                businesses of all sizes. Our team of skilled web developers is
                here to help you establish a robust online presence that
                captivates your audience and drives business growth.
              </p>
              <p className="mb-4"></p>
              <p className="mb-4"></p>
              <p className="mb-4"></p>
              <p className="mb-4"></p>
              <p className="mb-4"></p>
              <p className="mb-4"></p>
              <p className="mb-4">
                In today's digital landscape, a professionally developed website
                is a key differentiator for businesses. Our web development
                services are aimed at empowering your online presence, helping
                you build trust, engage your audience, and achieve your business
                goals. Contact us today to discuss your web development needs
                and embark on a journey towards online success.
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
      {/* Web App */}
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
              Web Development Services
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
                      Customized Web Solutions
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div className="accordion-body">
                      We understand that every business is unique, and that's
                      why we offer customized web development solutions tailored
                      to your specific needs. Whether you require a simple
                      informational website or a complex e-commerce platform,
                      our team has the expertise to deliver results that exceed
                      your expectations. Our solutions are built using the
                      latest technologies and industry best practices to ensure
                      your website is modern, responsive, and user-friendly.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeIn"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeIn",
                  }}
                >
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Responsive Design
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div className="accordion-body">
                      With the increasing use of mobile devices, having a
                      responsive website is no longer an option, but a
                      necessity. Our web development team specializes in
                      creating responsive designs that adapt seamlessly to any
                      screen size or device. This ensures that your website
                      looks and functions flawlessly, whether it's accessed on a
                      desktop, smartphone, or tablet. By providing an optimal
                      user experience across all devices, you can effectively
                      engage your audience and increase conversions.
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
                      User-Centric Approach
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div className="accordion-body">
                      At the heart of our web development process is a
                      user-centric approach. We believe that a website should
                      not only be visually appealing but also intuitive and easy
                      to navigate. Our team conducts thorough user research to
                      understand your target audience and their needs. We then
                      incorporate this valuable insight into the design and
                      functionality of your website, creating a seamless user
                      experience that keeps visitors coming back for more.
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
                      SEO-Friendly Development
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div className="accordion-body">
                      A visually stunning website is only effective if it can be
                      found by your target audience. Our web development team
                      integrates search engine optimization (SEO) best practices
                      into the development process to ensure that your website
                      is search engine friendly. From optimizing site structure
                      and metadata to enhancing page load speed, we implement
                      strategies that help your website rank higher in search
                      engine results, driving organic traffic and boosting your
                      online visibility.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeIn"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeIn",
                  }}
                >
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Ongoing Support and Maintenance
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div className="accordion-body">
                      Our commitment to your success extends beyond the initial
                      development phase. We offer comprehensive support and
                      maintenance services to keep your website running
                      smoothly. Whether you need regular updates, security
                      patches, or technical assistance, our team is always ready
                      to provide prompt and reliable support.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeIn"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.7s",
                    animationName: "fadeIn",
                  }}
                >
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Scalable and Future-Proof Solutions
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div className="accordion-body">
                      We build websites that are not only powerful and
                      functional today but also scalable and adaptable for the
                      future. Our web development services are designed to grow
                      alongside your business, accommodating your evolving needs
                      and incorporating new features and technologies as
                      required. With our future-proof solutions, you can
                      confidently expand your online presence and stay ahead of
                      the competition.
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
export default WebDevlopment;
