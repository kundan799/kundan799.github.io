import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ScroolToTop.css";

export const ScroolToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      // for visible
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
    // click
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </div>
  ) : null;
};
