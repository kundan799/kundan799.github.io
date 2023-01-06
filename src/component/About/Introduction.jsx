import React from 'react'
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Introducton.css";
import profilePic from "../../assest/kundan.png";

const Introduction = () => {
  return (
    <>
    <section id="#about">
        <div className="section sec1" data-aos="fade-right">
          <br/>
          <br/>
          <h2 className="section__title">
          🙋‍♂️  About <span className="different">Me</span>
          </h2>
          <div className={"introduction " }>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi{ "  "}
                {/* <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px"></img> */}
                 Everyone, My name is{" "}
                <span className="different">Kundan Kumar Keshri </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Ranchi, Jharkhand (India)
                </span>
                . I have completed my graduation in BseIT ( Bachelor of Science in Information Technology)
                from{" "}
                <span className="different">
                Dr. Shyama Prasad Mukherjee University (JH)
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travling{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Explorer{" "}
              </h4>
              
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Introduction
