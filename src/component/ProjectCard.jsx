import React from "react";
//import projectImg from "../img/product-ecom.webp";
import "../component/projectcard.css";

const ProjectCard = (props) => {
  return (
    <>
      <div
        class="col-lg-4 wow fadeIn"
        data-wow-delay="0.3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeIn",
        }}
      >
        <div class="case-item position-relative overflow-hidden rounded mb-2">
          <img class="img-fluid" src={props.imgsrc} alt="" />
          {/* <!--<a class="case-overlay text-decoration-none" href="https://grobig.in/ecom/" target="_blank">--> */}
          <a
            className="case-overlay text-decoration-none"
            href="/projects"
            target="_blank"
          >
            <small>{props.pname}</small>
            <h5 class="lh-base text-white mb-3">
              An e-commerce application facilitates online buying and selling of
              products and services.
            </h5>
            <span class="btn btn-square btn-primary">
              <i class="fa fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
