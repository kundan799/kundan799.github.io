import React from "react";
import { ThemeContext } from "../../context/Theme";
import { Navbar } from "../Navbar/Navbar";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center nav_top1" + themename}>
        <h3>
          <a href="#home" className="link" style={{ textDecoration: "none" }}>
            Kundan
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
