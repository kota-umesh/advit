import React, { useState } from "react";
import "./newsletter.css";
import newsletterImg from "../img/newsletter.png";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the email to your backend for subscription
    // For this example, we'll just simulate a successful subscription
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <div className="container-fluid bg-primary newsletter py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow  fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <img className="img-fluid" src={newsletterImg} alt="" />
            </div>
            <div
              className="col-md-7 py-5 newsletter-text wow  fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Newsletter
              </div>
              <h1 className="text-white mb-4">
                Let's subscribe the newsletter
              </h1>
              <div className="position-relative w-100 mt-3 mb-2">
                {subscribed ? (
                  <p>Thank you for subscribing to our newsletter!</p>
                ) : (
                  <form method="post" onSubmit={handleSubmit}>
                    <input
                      className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      placeholder="Enter Your Email"
                      style={{ height: "48px" }}
                    />
                    <button
                      type="button"
                      className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                    >
                      <i className="fa fa-paper-plane text-primary fs-4"></i>
                    </button>
                  </form>
                )}
              </div>
              <small className="text-white-50">
                Certainly! To subscribe to our newsletter, please provide us
                with your email address, and we will add you to our mailing
                list. Thank you for your interest!
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsLetter;
