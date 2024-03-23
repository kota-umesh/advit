import React from "react";
import Header from "./Header";
import DesCard from "./DesCard";
import AboutImg from "../img/about-img.jpg";
import ServiceSection from "./services/ServiceSection";
import FeatureSection from "./FeatureSection";
import HeroImg from "../img/hero-img.png";

const Home = () => {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Home</h1> */}
      <main>
        <Header
          title="Revolutionize Your Business"
          para="Transform Your Existing Mobile App with Artificial Intelligence ..."
          btn1="Read More"
          breadcombHide={{ display: "none" }}
          heroImg={HeroImg}
        />
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="about-img">
                  <img className="img-fluid" src={AboutImg} alt="AboutImage" />
                </div>
              </div>
              <DesCard />
            </div>
          </div>
        </div>
        <ServiceSection />
        <FeatureSection />
      </main>
    </>
  );
};

export default Home;
