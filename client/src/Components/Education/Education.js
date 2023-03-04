import React from 'react'
import './Education.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    const data = [
      {
        name: "ALX- Holberton School of Software Engineering",
        degree: "Diploma in Software Engineering",
        year: "2023-2022",
      },
      {
        name: "Lagos State University, Ojo",
        degree: "M.Sc in Chemical Engineering",
        year: "2020-2022",
      },
      {
        name: "Nnamdi Azikiwe University, Awka",
        degree: "B.Eng in Chemical Engineering",
        year: "2011-2016",
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
    <div className="container education-section" id='education'>
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>
      <div className="timeline-section">
        <VerticalTimeline lineColor="tomato">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:'burlywood'}}>
                {item.degree}
              </h5>

              {/* <p>{item.year}</p> */}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education