import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Code First Girls",
      position: "Fullstack Instructor",
      des: "Facilitating CFG Cohort Fullstack sessions to guide girls in their tech learning journey.",
      year: "2023",
      techskills: [
        {
          techname: "SQL",
        },
        {
          techname: "Javascript",
        },
        {
          techname: "Python",
        },
        {
          techname: "Git/Github",
        },
      ],
    },
    {
      companyname: "Paramount Student",
      position: "Frontend Developer",
      des: "Working with a team of Developers to develop the company website ",
      year: "2023",
      techskills: [
        {
          techname: "Reactjs",
        },
        {
          techname: "Javascript",
        },
        {
          techname: "HTML/CSS",
        },
        {
          techname: "Git/Github",
        },
      ],
    },
    {
      companyname: "Mentor Me Collective",
      position: "Frontend Engineer",
      des: "Volunteer Position developing a Learning Management System Using Webflow ",
      year: "2022",
      techskills: [
        {
          techname: "Webflow",
        },
      ],
    },
  ];

  const colors = [
    "#CD6155",
    "#9B59B6",
    "#2471A3",
    "#1ABC9C",
    "#229954",
    "#D4AC0D",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>
      <div className="timeline-section">
        <VerticalTimeline lineColor="tomato">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "burlywood" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title fst-italic">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>
              <div className="row">
                {item.techskills.map((tech, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md 6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tech.techname}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
