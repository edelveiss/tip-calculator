import React from "react";
import "./Header.css";

function Header({ totalAmount, tip }) {
  return (
    <div className="header">
      <div className="header-top">
        <div className="shape square"></div>
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
      </div>
      <div className="total-tip">
        <div className="banner-circle">
          <div className="little circle"></div>
          <div className="little circle"></div>
          <div className="little circle"></div>
        </div>
        <p>Total + {tip}% tip </p>
        <h1>${totalAmount}</h1>
      </div>
    </div>
  );
}

export default Header;
