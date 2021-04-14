import React from "react";
import "./Footer.css";
import { Link, useHistory } from "react-router-dom";
function Footer() {
  const history = useHistory();
  return (
    <div className="footer">
      {history.location.pathname === "/" ? (
        <Link to="/split">
          <div className="footer-element">
            <span className="split-shevron"> Split</span>
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
        </Link>
      ) : (
        <Link to="/">
          <div className="footer-element">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-left"></i>
            <span className="split-shevron"> Home</span>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Footer;
