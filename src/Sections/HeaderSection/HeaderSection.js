import React from "react";
import { Button } from "../../UI/Reusable/Button/Button";
import "./headerSection.css";
import { Navbar } from "../Navbar/Navbar";

export const HeaderSection = () => {
  return (
    <section className="yups-logo-background">
      <Navbar />
      <div className="main">
        <div className="main-section">
          <p className="hero-section-text">
            The perfect partner for <br /> accelerating your business
            <br /> with a seamless data-driven
            <br /> marketing strategy and stable
            <br /> tech solutions specifically
            <br /> designed for YOU.
          </p>
          <Button
            buttonText={"Book a free call"}
            className={"orangeButton header-button-class"}
          />
        </div>
      </div>
    </section>
  );
};
