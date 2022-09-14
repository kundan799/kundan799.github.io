import React from "react";
import { ThemeContext } from "../../context/Theme";
import { Navbar } from "../Navbar/Navbar";



import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link" style={{textDecoration:"none"}}>
            <span>
              {/* <img src={Image} alt="logo" /> */}
            </span>
            Kundan
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
