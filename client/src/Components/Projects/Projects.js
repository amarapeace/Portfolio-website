import React from "react";
import ProjectList from "./ProjectList";
import "./Projects.css";

const Projects = () => {

    const data = [
      {
        name: "Multi Authored Blog",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit ipsam laborum voluptas blanditiis nemo, architecto illum amet culpa quasi esse numquam iusto. Adipisci placeat dignissimos eligendi mollitia magni. Veniam! Veritatis laudantium",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "Django",
          },
          {
            techname: "React js",
          },
          {
            techname: "Node js",
          },
          {
            techname: "Next js",
          },
        ],
      },

      {
        name: "Dodov site clone",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit ipsam laborum voluptas blanditiis nemo, architecto illum amet culpa quasi esse numquam iusto. Adipisci placeat dignissimos eligendi mollitia magni. Veniam! Veritatis laudantium",
        projectlink: "https://github.com/chihannah/",
        techused: [
          {
            techname: "Django",
          },
          {
            techname: "React js",
          },
          {
            techname: "Node js",
          },
          {
            techname: "Next js",
          },
        ],
      },

      {
        name: "AirBnB site clone",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit ipsam laborum voluptas blanditiis nemo, architecto illum amet culpa quasi esse numquam iusto. Adipisci placeat dignissimos eligendi mollitia magni. Veniam! Veritatis laudantium",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "Django",
          },
          {
            techname: "React js",
          },
          {
            techname: "Node js",
          },
          {
            techname: "Next js",
          },
        ],
      },

      {
        name: "Multi Authored Blog",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit ipsam laborum voluptas blanditiis nemo, architecto illum amet culpa quasi esse numquam iusto. Adipisci placeat dignissimos eligendi mollitia magni. Veniam! Veritatis laudantium",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "Django",
          },
          {
            techname: "React js",
          },
          {
            techname: "Node js",
          },
          {
            techname: "Next js",
          },
        ],
      },

      {
        name: "Twitter home page clone",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit ipsam laborum voluptas blanditiis nemo, architecto illum amet culpa quasi esse numquam iusto. Adipisci placeat dignissimos eligendi mollitia magni. Veniam! Veritatis laudantium",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "Django",
          },
          {
            techname: "React js",
          },
          {
            techname: "Node js",
          },
          {
            techname: "Next js",
          },
        ],
      },

      {
        name: "My Portfolio",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit ipsam laborum voluptas blanditiis nemo, architecto illum amet culpa quasi esse numquam iusto. Adipisci placeat dignissimos eligendi mollitia magni. Veniam! Veritatis laudantium",
        projectlink: "https://github.com/amarapeace/",
        techused: [
          {
            techname: "Django",
          },
          {
            techname: "React js",
          },
          {
            techname: "Node js",
          },
          {
            techname: "Next js",
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
