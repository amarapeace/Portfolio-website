import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./Projects.css";
import Zoom from 'react-reveal/Zoom'

const ProjectList = ({ name, des, projectlink, techused }) => {
  const [show, setShow] = useState(false);

  const handleShowandCollapse = () => {
    setShow(!show);
  };
  return (
    <Zoom>
      <div
        className={show ? "project-list-opened project-list" : "project-list"}
        onClick={handleShowandCollapse}
        onMouseEnter={() => setShow(true)}
        id="projects"
      >
        <div className="title-and-collapse-option">
          <h5>{name}</h5>
          <p>{show ? <FcCollapse /> : <FcExpand />}</p>
        </div>
        <div className="description">
          {show ? (
            <p>{des}</p>
          ) : (
            <p>
              {des.substring(0, 120)}...
              <p style={{ color: "green" }}>Read More</p>
            </p>
          )}
        </div>
        <div className="row">
          {techused &&
            techused.map((tech, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="tech-used-in-project">
                  <p>{tech.techname}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="live-demo-button">
          <a href={projectlink} target="blank">
            Live Demo
          </a>
        </div>
      </div>
    </Zoom>
  );
};

export default ProjectList;
