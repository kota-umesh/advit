import React, { useState } from "react";
import Header from "./Header";
import HeroImg from "../img/hero-img-contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [Submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any submission logic, such as sending data to a server.
    // For demonstration, we'll just log the form data.
    console.log("Form Data:", formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
    });
    // Show success message
    setSubmitted(true);
  };

  const handleClosePopup = () => {
    setSubmitted(false);
    // Optionally reset the form fields after closing the popup
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Contact</h1> */}
      <Header
        title="Contact Us"
        styleBtnHide={{ display: "none" }}
        heroImg={HeroImg}
        imgHeight={{ maxHeight: "300px", maxWidth: "350px" }}
      />
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
              Contact Us
            </div>
            <h1 className="mb-4">If You Have Any Query, Please Contact Us</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <p className="text-center mb-4">
                We would be more than happy to offer you a free consultation on
                the services we provide.
              </p>
              <div
                className="wow fadeIn"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeIn",
                }}
              >
                <form method="post" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          name="message"
                          onChange={handleChange}
                          style={{ height: "150px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary w-100 py-3"
                        onClick={handleSubmit}
                      />
                      {/* <!--<button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>--> */}
                    </div>
                  </div>
                </form>

                {/* Custom success message popup */}
                {Submitted && (
                  <div id="success-popup">
                    <h3>Thank you for your message!</h3>
                    <p>We will get back to you soon.</p>
                    <button className="close" onClick={handleClosePopup}>
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
