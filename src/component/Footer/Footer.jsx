import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="section">
      <a href="/" rel="noreferrer" target="_blank">
        <div className="footerBox">
          <h1 className="footer">
            Made with{" "}
            <span style={{ color: `red`, background: `transparent` }}>❤</span>{" "}
            By Kundan
          </h1>

          <h5>© 2022 KUNDAN RIGHTS RESERVED</h5>


        </div>
      </a>
    </div>
  );
};

export default Footer;
