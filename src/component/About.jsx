import React from "react";
import Header from "./Header";
import HeroImg from "../img/hero-img-about.png";

import AboutImg from "../img/about-img.jpg";
const About = () => {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>About Us</h1> */}
      <Header
        title="About Us"
        styleBtnHide={{ display: "none" }}
        heroImg={HeroImg}
        imgHeight={{ maxHeight: "300px", maxWidth: "350px" }}
      />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img className="img-fluid" src={AboutImg} alt="AboutImage" />
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
                About Us
              </div>
              <h1 className="mb-4">
                Welcome to Advit Software Smart Solutions for Success
              </h1>
              <p className="mb-4">
                Advit Software is a leading IT consulting and technology
                services company committed to helping our clients achieve their
                business objectives through innovative software development.
                With our extensive expertise and dedication to customer-centric
                solutions, we partner with clients to conceptualize and
                implement technology-driven business transformation initiatives.
              </p>
              <p className="mb-4">
                At Advit, we pride ourselves on our ability to deliver
                imaginative and innovative software solutions that address our
                clients' unique needs. As an ISO 9001:2008 certified company, we
                uphold the highest quality standards in all our services. Our
                talented team of professionals possesses a deep understanding of
                technology and works closely with clients to provide exceptional
                IT consultancy services.
              </p>
              <p className="mb-4">
                Through our customer-centric approach, we have successfully
                assisted numerous organizations in enhancing and accelerating
                their economic returns. Our commitment to exceeding customer
                expectations drives us to continually strive for excellence. We
                remain at the forefront of technology through ongoing training
                programs, ensuring that we are equipped to deliver cutting-edge
                solutions.
              </p>
              <p className="mb-4">
                At Advit Software, we prioritize security and understand the
                importance of safeguarding our clients' data. Our ready-made
                software packages are designed with advanced security features,
                providing a level of protection far superior to previous
                decades' developments.
              </p>
              <p className="mb-4">
                We take pride in our track record of delivering projects on time
                and within budget, earning a reputation for reliability and
                professionalism. Our focus on client satisfaction has
                established us as a trusted partner for businesses seeking
                software solutions that drive success.
              </p>
              <p className="mb-4">
                Join hands with Advit Software and experience the difference of
                working with a dedicated and innovative software development
                partner. Together, we can achieve your business objectives and
                embark on a transformative journey.
              </p>
              <p className="mb-4">Thank you for choosing Advit Software.</p>
              <p className="mb-4">The Advit Software Team</p>

              <div className="d-flex align-items-center mt-4">
                {/* <!-- <a className ="btn btn-primary rounded-pill px-4 me-3" href="">Read More</a> --> */}
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
    </>
  );
};

export default About;
