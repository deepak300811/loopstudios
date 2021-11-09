import React, { useEffect } from "react";
import "./styles.css";
const MobileNavigation = ({ setShowBackdrop, showBackdrop }) => {
  const handelMenu = () => {
    setShowBackdrop((prev) => {
      if (!prev) {
        document.getElementById("hamburger").classList.add("change");
        document.body.style.position = "fixed";
      } else {
        document.getElementById("hamburger").classList.remove("change");
        document.body.style.position = "static";
      }
      return !prev;
    });
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth >= 768) {
        setShowBackdrop(false);
        document.getElementById("hamburger").classList.remove("change");
        document.body.style.position = "static";
      }
    });
    return () =>
      window.removeEventListener("resize", (e) => {
        if (e.target.innerWidth >= 768) {
          setShowBackdrop(false);
          document.getElementById("hamburger").classList.remove("change");
          document.body.style.position = "static";
        }
      });
  }, []);

  return (
    <div className="burger-menu">
      <main className="burger-icon" id="hamburger" onClick={handelMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </main>
    </div>
  );
};

export default MobileNavigation;
