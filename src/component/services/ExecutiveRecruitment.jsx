import React from "react";
import Header from "../Header";
//import ServiceSection from "./ServiceSection";
//import Testimonial from "./Testimonial";
import HeroImg from "../../img/hero-img.png";
import { FaRobot, FaGraduationCap, FaPowerOff, FaBrain } from "react-icons/fa";

const ExecutiveRecruitment = () => {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Services</h1> */}
      <Header
        title="Staffing Service"
        styleBtnHide={{ display: "none" }}
        heroImg={HeroImg}
        imgHeight={{ maxHeight: "300px", maxWidth: "350px" }}
      />
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
                Your Premier Executive Recruitment Partner in India & Abroad
              </h1>
              <p className="mb-4">
                Advit Softwares is the leading executive recruitment agency in
                Hyderabad and Secunderabad, offering exceptional executive
                placement services to small, medium, and multinational
                companies. With over 7 years of experience, our team of
                executive recruitment consultants in India & Abroad is dedicated
                to providing top-notch recruitment and management solutions.
              </p>
              {/* <!-- <a className="btn btn-primary rounded-pill px-4" href="">Read More</a> --> */}
              <p className="mb-4">
                At Advit Softwares, we specialize in processing and managing
                payroll, human resources, and manpower recruitment. Whether you
                need temporary or permanent staffing, our executive recruitment
                services are designed to eliminate low unemployment, fill open
                positions, and attract and retain top talent.
              </p>
              <p className="mb-4">
                Executive recruitment, also known as search firm recruitment,
                focuses on finding candidates for high-level positions such as
                CEO, manager, and coach. Our recruiters specialize in specific
                industries and excel at finding market-leading or hard-to-find
                talent. They scour online marketplaces like Naukri and LinkedIn,
                reach out to qualified candidates, and conduct interviews and
                background checks.
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
                        <h5 className="mb-3">Executive Recruitment Services</h5>
                        <p>
                          Fast candidate sourcing compared to traditional
                          methods. Increased access to high-quality candidates.
                          <br />
                          Reduced time-to-hire.
                          <br />
                          Cost-effective recruitment solutions.
                          <br />
                          Ability to reach candidates worldwide.
                          <br />
                          Expertise in attracting passive job seekers.
                          <br />
                          Minimization of hiring risks.
                          <br />
                          Competitive edge in the market.
                          <br />
                          Improved company profitability and performance.
                          <br />
                          Reduced attrition and enhanced productivity.
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
                        <h5 className="mb-3">Advantages of Choosing Advit</h5>
                        <p>
                          Faster candidate sourcing.
                          <br />
                          Access to high-quality candidates.
                          <br />
                          Reduced time-to-hire.
                          <br />
                          Cost-effective recruitment.
                          <br />
                          Global job posting capabilities.
                          <br />
                          Expertise in attracting passive job seekers.
                          <br />
                          Knowledge gap bridging.
                          <br />
                          Reduced risk of bad hires.
                          <br />
                          Competitive advantage.
                          <br />
                          Improved company profitability and performance.
                          <br />
                          Reduced attrition and increased productivity.
                          <br />
                          Expertise in labor market dynamics.
                          <br />
                          Reduced workload for HR staff.
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
                        <h5 className="mb-3">Industries We Serve</h5>
                        <p>
                          Telecom/ISP Oil and Gas/Power/Infrastructure/Energy
                          <br />
                          Banking/Financial Services
                          <br />
                          Automobile
                          <br />
                          BPO/ITES/CRM/Transcription
                          <br />
                          FMCG/Foods/Beverage
                          <br />
                          Pharma/Biotech/Clinical Research
                          <br />
                          Construction/Engineering/Cement/Metals
                          <br />
                          Hotels/Airlines/Travel
                          <br />
                          Retailing
                          <br />
                          Education/Teaching/Training
                          <br />
                          IT-Hardware & Networking
                          <br />
                          IT-Software/Software Services
                          <br />
                          Medical/Healthcare/Hospital
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
                          Why Choose Advit Softwares Executive Recruitment
                          Services?
                        </h5>
                        <p>
                          Over 10 years of executive recruitment experience.
                          Team of 10+ expert executive recruitment consultants.
                          <br />
                          Comprehensive executive search services.
                          <br />
                          Dedicated to finding the best-fit managers and
                          professionals.
                          <br />
                          Guaranteed quality in executive search services
                          worldwide.
                          <br />
                          Focus on building long-term relationships with
                          clients.
                          <br />
                          Transparent and regular communication.
                          <br />
                          Insight into business and company culture.
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

export default ExecutiveRecruitment;
