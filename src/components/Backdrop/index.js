import React from "react";
import "./styles.css";
const Backdrop = ({ children }) => {
  return <div className="backdrop container"> {children}</div>;
};

export default Backdrop;
