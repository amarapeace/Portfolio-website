import React from "react";
import ProjectList from "./ProjectList";
import "./Projects.css";

const Projects = () => {

    const data = [
      {
        name: "Devask",
        des: "Built with React, a fully functional website for developers to ask questions and get answers in an instance from fellow developers.A seeming merge of twitter and stackoverflow.",
        projectlink: "https://devask.tech",
        techused: [
          {
            techname: "React",
          },
          {
            techname: "Javascript",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },
      {
        name: "My Portfolio",
        des: "Built with React library. My personal portfolio showcasing my educational qualification, work experiences, skills and other projects",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "React",
          },
          {
            techname: "Javascript",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },
      {
        name: "DJ suggest desk",
        des: "Built with NextJs, a fully functional website for clubbers to communicate with a DJ and suggest songs to be played.",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "Next js",
          },
          {
            techname: "Tailwind",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },
      {
        name: "Softwork",
        des: "Built with Flask, a testing platform where students and working professionals can put their softskills to test.",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "Flask",
          },
          {
            techname: "Javascript",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },
      {
        name: "Multi Authored Blog",
        des: "Built with Django in a team of 6 made up of designers, frontend and Backend engineers, a multi authored blog.",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "Django",
          },
          {
            techname: "Bootstrap",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },
      {
        name: "Dodov site clone",
        des: "A static website that had me doing a lot of manipulations with Javascript.",
        projectlink: "https://github.com/chihannah/",
        techused: [
          {
            techname: "Javascript",
          },
          {
            techname: "Bootstrap",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },

      {
        name: "AirBnB site clone",
        des: "A static website built with HTML, CSS and Javascript as one of the projects for ALX foundational stage.",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "Javascript",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },

      {
        name: "Twitter home page clone",
        des: "A beginner project with only HTML and CSS",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "HTML",
          },
          {
            techname: "CSS",
          },          
        ],
      },
    ];
  return (
    <div className="container">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
