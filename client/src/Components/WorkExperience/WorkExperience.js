import React from 'react'
import './WorkExperience.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {

    const data = [
      {
        companyname: "Google",
        position: "Full Stack Developer",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet corrupti nemo omnis cumque repellat iste aliquam ",
        year: "2019",
        techskills: [
          {
            techname: "React js",
          },
          {
            techname: "React js",
          },
          {
            techname: "React js",
          },
          {
            techname: "React js",
          },
        ],
      },
      {
        companyname: "Facebook",
        position: "Full Stack Developer",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet corrupti nemo omnis cumque repellat iste aliquam ",
        year: "2019",
        techskills: [
          {
            techname: "React js",
          },
          {
            techname: "React js",
          },
          {
            techname: "React js",
          },
          {
            techname: "React js",
          },
        ],
      },
      {
        companyname: "Youtube",
        position: "Full Stack Developer",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet corrupti nemo omnis cumque repellat iste aliquam ",
        year: "2019",
        techskills: [
          {
            techname: "React js",
          },
          {
            techname: "React js",
          },
          {
            techname: "React js",
          },
          {
            techname: "Express js",
          },
        ],
      },
      {
        companyname: "Microsoft",
        position: "Full Stack Developer",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet corrupti nemo omnis cumque repellat iste aliquam ",
        year: "2019-2022",
        techskills: [
          {
            techname: "Javascript",
          },
          {
            techname: "Next js",
          },
          {
            techname: "React js",
          },
          {
            techname: "Node js",
          },
        ],
      },
      {
        companyname: "Microsoft",
        position: "Full Stack Developer",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet corrupti nemo omnis cumque repellat iste aliquam ",
        year: "2019-2022",
        techskills: [
          {
            techname: "Javascript",
          },
          {
            techname: "Next js",
          },
          {
            techname: "React js",
          },
          {
            techname: "Node js",
          },
        ],
      },
      {
        companyname: "Microsoft",
        position: "Full Stack Developer",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet corrupti nemo omnis cumque repellat iste aliquam ",
        year: "2019-2022",
        techskills: [
          {
            techname: "Javascript",
          },
          {
            techname: "Next js",
          },
          {
            techname: "React js",
          },
          {
            techname: "Node js",
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
    "#D4AC0D"
    ]

  return (
    <div className="container workexperience-section" id='workexperience'>
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>
      <div className='timeline-section'>
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
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
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
}

export default WorkExperience