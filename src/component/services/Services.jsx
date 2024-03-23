import React from "react";
import Header from "../Header";
import ServiceSection from "./ServiceSection";
import Testimonial from "./Testimonial";
import HeroImg from "../../img/hero-img.png";

const Services = () => {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Services</h1> */}
      <Header
        title="Our Services"
        styleBtnHide={{ display: "none" }}
        heroImg={HeroImg}
        imgHeight={{ maxHeight: "300px", maxWidth: "350px" }}
      />
      <ServiceSection />
      <Testimonial />
    </>
  );
};

export default Services;
