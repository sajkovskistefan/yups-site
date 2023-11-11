import React from "react";

import "./services.css";
export const Services = () => {
  return (
    <div className="main-container">
      <div id="services" className="services-container">
        <div className="header-and-paragraphs">
          <div className="">
            <h1 className="services-headers-font">Services</h1>
            <h1 className="marketing-headers-font">
              Marketing and IT solutions
            </h1>
          </div>
          <div className="services-paragraph">
            We offer services for incrising brand awareness and creating overall
            strategy through social media marketing, Google Ads, custom landing
            pages and IT solutions.
          </div>
        </div>
        <div className="white-line"></div>
        <div className="data-services-container">
          <h1 className="data-driven-headers-font">
            Make the right data-driven decisions with one of our plans
          </h1>
          <div className="right-side-paragraph-container">
            <div>
              <p className="payment-paragraph-font">
                All plans are yearly plans, based ona a one-time fixed{" "}
              </p>
              <p className="payment-paragraph-font">
                payment and a monthly payment
              </p>
            </div>
            <br />
            <p className="payment-paragraph-font">
              * prices have a fixed one time payment and a monthly instalment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
