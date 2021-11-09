import React from "react";
import "./style.css";
import NavigationContainer from "./NavigationContainer";
import Brand from "./Brand";
import MobileNavigation from "./BurgerMenu";

const Hero = ({ setShowBackdrop, showBackdrop }) => {
  return (
    <section
      className="hero-container"
      style={{ backgroundImage: "url(/assets/image-hero.jpg)" }}
    >
      <div className="container margin-auto pt-2 ">
        <nav>
          <Brand />
          <NavigationContainer />
          <MobileNavigation
            setShowBackdrop={setShowBackdrop}
            showBackdrop={showBackdrop}
          />
        </nav>
        <section className="intro-text">
          <span>Immersive Experiences that deliver</span>
        </section>
      </div>
    </section>
  );
};

export default Hero;
