import React from 'react'
import "./About.css";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Type } from './Type';
import Introduction from './Introduction';
import { Timeline } from './Timeline';
import { Techstacks } from './Teckstack';

const About = () => {
  return (
    <>
    <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello,
          <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="50px" height="50px"></img>
           I am <span className="about__name">Kundan Kumar Keshri</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/kundan799"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:keshrikundankumar724@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917992273137"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/kundan-kumar-keshri-04621b238/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1ywjWH6h-mrXNF4Qycxx9A-kBBS_CWb8M/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction/>
      <Timeline/>
      <section id="#skills">
      <Techstacks/>
      </section>
      {/* ch */}
    </>
  )
}

export default About
