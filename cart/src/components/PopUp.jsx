import React from "react";
import "./PopUp.css";

const PopUp = ({ show }) => {
  if (!show) return null;
  return <div className="popup">Order placed successfully</div>;
};

export default PopUp;
