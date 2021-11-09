import React from "react";
import "./styles.css";
const VerticalMenu = () => {
  return (
    <div className="navigation-items-container verticle-nav">
      <ul className="navigation-items verticle-nav">
        <li>
          <div>
            About <div className="hover-underline"></div>
          </div>
        </li>
        <li>
          <div>
            Careers<div className="hover-underline"></div>
          </div>
        </li>
        <li>
          <div>
            Events<div className="hover-underline"></div>
          </div>
        </li>
        <li>
          <div>
            Products<div className="hover-underline"></div>
          </div>
        </li>
        <li>
          <div>
            Support<div className="hover-underline"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VerticalMenu;
