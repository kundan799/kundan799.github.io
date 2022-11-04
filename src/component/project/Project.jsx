import React from "react";
import "./Project.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiChakraui,
  SiRedux,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import profilePic from "../../assest/mailChimpClone.png";
import zapoosclone from "../../assest/ZapoosClone.png";
import kfcclone from "../../assest/KfcClone.png";
import havvest from "../../assest/harvest.png";

export const Projects = () => {
  return (
    <>
      {/* project 1*/}
      <div className="section pro">
        <br />
        <br />
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={profilePic} alt="Mailchimp" />
                </div>
              </div>
              <div className="project_information">
                <h2>Mailchimp Clone</h2>
                <p>
                  Mailchimp is a marketing automation platform and email
                  marketing service. we build clone of their store website.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <FaReact />
                  <SiChakraui />
                </div>
                <div>
                  <a
                    href="https://purring-wash-3465.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kundan799/purring-wash-3465/tree/master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* project 2 */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={zapoosclone} alt="Sk-Weather-App" />
                </div>
              </div>
              <div className="project_information">
                <h2>Zappos Clone</h2>
                <p>
                  Zappos is an e-commerce website where we can buy cloth and
                  shoes.we build clone of their store website.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <FaReact />
                  <SiChakraui />
                </div>
                <div>
                  <a
                    href="https://kk-kundan799.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kundan799/tedious-yoke-6014"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* project 3 */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={kfcclone} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>KFC Clone</h2>
                <p>
                  KFC is an online food delivery website as well as we can find
                  stores too at different locations in the country. A
                  collaborative project built by a team of 6 executed in 6days.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://beautiful-pothos-27ecb8.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/srbhkumar624/kfcclonewebsite"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* project 4 */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={havvest} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Harvest Clone</h2>
                <p>
                  Harvest is a web app for time tracking and projects
                  management. Created Full Stack App to handle all the details
                  about the project,employee time tracking...
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <FaReact />
                  <SiRedux/>
                  <SiChakraui />
                </div>
                <div>
                  <a
                    href="https://getharvest-clone.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kundan799/doting-caption-2440"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
