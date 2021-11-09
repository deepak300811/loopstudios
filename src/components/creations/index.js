import React, { useEffect, useState } from "react";
import "./styles.css";
const Creations = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    console.log("window=", window.innerWidth);
    if (window.innerWidth > 767) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
    return () =>
      window.removeEventListener("resize", (e) => {
        if (e.target.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
  }, []);

  return (
    <>
      <div className="container margin-auto">
        <section className="heading-button">
          <p className="creations-heading more-spacing">our creations</p>
          <div
            className="main-heading more-spacing button-see-all"
            id="show-desktop-see-all"
          >
            See ALL
          </div>
        </section>
        <section className="creations-grid">
          <div className="creation-item">
            <div className="img-container">
              <img
                src={`./assets/image-deep-earth${
                  isMobile ? "-mobile" : ""
                }.jpg`}
                alt="workingimg"
              />
            </div>
            <div className="para-container">
              <p>Deep Earth</p>
            </div>
          </div>
          <div className="creation-item">
            <div className="img-container">
              <img
                src={`./assets/image-night-arcade${
                  isMobile ? "-mobile" : ""
                }.jpg`}
                alt="workingimg"
              />
            </div>
            <div className="para-container">
              <p>night arcade</p>
            </div>
          </div>
          <div className="creation-item">
            <div className="img-container">
              <img
                src={`./assets/image-soccer-team${
                  isMobile ? "-mobile" : ""
                }.jpg`}
                alt="workingimg"
              />
            </div>
            <div className="para-container">
              <p>soccer team</p>
            </div>
          </div>
          <div className="creation-item">
            <div className="img-container">
              <img
                src={`../assets/image-grid${isMobile ? "-mobile" : ""}.jpg`}
                alt="workingimg"
              />
            </div>
            <div className="para-container">
              <p>the grid</p>
            </div>
          </div>
          <div className="creation-item">
            <div className="img-container">
              <img
                src={`./assets/image-from-above${
                  isMobile ? "-mobile" : ""
                }.jpg`}
                alt="workingimg"
              />
            </div>
            <div className="para-container">
              <p>from up above vr</p>
            </div>
          </div>
          <div className="creation-item">
            <div className="img-container">
              <img
                src={`./assets/image-pocket-borealis${
                  isMobile ? "-mobile" : ""
                }.jpg`}
                alt="workingimg"
              />
            </div>
            <div className="para-container">
              <p>pocket borealis</p>
            </div>
          </div>
          <div className="creation-item">
            <div className="img-container">
              <img
                src={`./assets/image-curiosity${isMobile ? "-mobile" : ""}.jpg`}
                alt="workingimg"
              />
            </div>
            <div className="para-container">
              <p>The Curiosity</p>
            </div>
          </div>
          <div className="creation-item">
            <div className="img-container">
              <img
                src={`./assets/image-fisheye${isMobile ? "-mobile" : ""}.jpg`}
                alt="workingimg"
              />
            </div>
            <div className="para-container">
              <p>make it fisheye</p>
            </div>
          </div>
        </section>
        <div className="more-spacing button-see-all" id="see-all">
          See ALL
        </div>
      </div>
    </>
  );
};
export default Creations;
