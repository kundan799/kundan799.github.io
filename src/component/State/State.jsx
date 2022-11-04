import React from "react";

import "./State.css";

const State = () => {
  return (
    <div>
      <div>
        <div className="contener" data-aos="fade-right">
          <a href="https://github.com/kundan799">
            <img
              className="img1"
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=kundan799"
              alt="total"
            />
          </a>
        </div>
        <br />
        <br />
        <br />
        <h2 className="stat" data-aos="fade-right">
          My Statistics
        </h2>
        <br />

        <div className="contener1" data-aos="fade-right">
          <a href="https://github.com/kundan799">
            <img
              className="img1"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=kundan799"
              alt="stats"
            />
          </a>
          <a href="https://github.com/kundan799">
            <img
              className="img1"
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=kundan799&count_private=true&show_icons=true"
              alt="language "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default State;
