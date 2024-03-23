import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Services from "./component/services/Services";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import "animate.css";
import NewsLetter from "./component/NewsLetter";
import WebDevlopment from "./component/services/WebDevelopment";
import MobileApp from "./component/services/MobileApp";
import PrivacyPolicy from "./component/Privacy-Policy";
import { FaArrowUp } from "react-icons/fa";
import WOW from "wowjs";

const App = () => {
  // wow
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  // Back to top
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling animation
    });
  };

  // Function to toggle visibility of the back-to-top button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener to check scroll position and toggle visibility of back-to-top button
  window.addEventListener("scroll", toggleVisibility);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/webdevelopment" element={<WebDevlopment />} />
        <Route exact path="/mobileapp" element={<MobileApp />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <NewsLetter />
      <Footer top={scrollToTop} />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default App;
