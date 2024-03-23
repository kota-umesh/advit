import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./testimonial.css";
//import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Testimonial = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
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
                Testimonial
              </div>
              <h1 className="mb-4">
                Exceptional AI Solutions for Your Business!
              </h1>
              <p className="mb-4">
                With our cutting-edge AI technology and expertise, we can
                revolutionize your operations, enhance decision-making, and
                drive remarkable growth. Here's how we can help:
              </p>
              {/* <!-- <a className="btn btn-primary rounded-pill px-4" href="">Read More</a> --> */}
            </div>
            <div
              className="col-lg-7 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <OwlCarousel
                className="testimonial-carousel border-start border-primary owl-loaded owl-drag"
                loop
                autoplay={true}
                items={1}
                margin={10}
                nav
              >
                {/* <div className="owl-carousel testimonial-carousel border-start border-primary owl-loaded owl-drag"> */}
                <div className="item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">
                    Predictive Capabilities: Leverage the power of predictive
                    analytics to anticipate customer needs, market trends, and
                    business outcomes. Our AI models can forecast future
                    patterns and behaviors, enabling you to make proactive
                    decisions and seize opportunities.
                  </p>
                </div>
                <div className="item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">
                    Personalize User Experiences: With AI algorithms, you can
                    analyze user behavior, preferences, and patterns to deliver
                    personalized recommendations, tailored content, and targeted
                    promotions. This level of personalization not only improves
                    user satisfaction but also boosts engagement and conversion
                    rates.
                  </p>
                </div>
                <div className="item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">
                    Personalize User Experiences: With AI algorithms, you can
                    analyze user behavior, preferences, and patterns to deliver
                    personalized recommendations, tailored content, and targeted
                    promotions. This level of personalization not only improves
                    user satisfaction but also boosts engagement and conversion
                    rates.
                  </p>
                </div>

                {/* </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
