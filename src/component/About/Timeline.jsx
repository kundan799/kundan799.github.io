import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";


export const Timeline = () => {
//   const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
     "#23283e" 
  );

 
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          
          
          <VerticalTimelineElement
            date={"Sep 2022 - Present"}
            contentStyle={{
              boxShadow: `#2978b5`,
              border: "3px solid #2978b5",
              backgroundColor: `white`,
              textAlign: "center",
              color: `black`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  #2978b5",
            }}
            iconStyle={{
              border: ` 3px solid #2978b5`,
              backgroundColor: `#ffff`,
              color: `#2978b5`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School (Remote)
            </h4>
            <p data-aos="fade-right">
              Joined the Military coding school to learn Full Stack Development
              and DSA. Also get to learn lot more other skills as well.
            </p>
          </VerticalTimelineElement>
         
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jul 2017 - Aug 2020"}
            contentStyle={{
              boxShadow: `#2978b5`,
              border: "3px solid #2978b5",
              backgroundColor: `white`,
              textAlign: "center",
              color: `black`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  #2978b5",
            }}
            iconStyle={{
                border: ` 3px solid #2978b5`,
                backgroundColor: `#ffff`,
                color: `#2978b5`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [BSc IT(bachelor of information technology)]

            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Ranchi College, Ranchi (JH)
            </h4>
            <p data-aos="fade-right">
              
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2017"}
            contentStyle={{
              boxShadow: `#2978b5`,
              border: "3px solid #2978b5",
              backgroundColor: `white`,
              textAlign: "center",
              color: `black`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  #2978b5",
            }}
            iconStyle={{
                border: ` 3px solid #2978b5`,
                backgroundColor: `#ffff`,
                color: `#2978b5`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [SJIC (Science)]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              St. John’s Inter College, Ranchi
            </h4>
            <p data-aos="fade-right">
              Studied 12th Science .
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
                border: ` 3px solid #2978b5`,
                backgroundColor: `#ffff`,
                color: `#2978b5`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
