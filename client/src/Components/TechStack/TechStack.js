import React, { useState } from "react";
import "./TechStack.css";
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const TechStack = () => {
  const colors = [
    "#CD6155",
    "#9B59B6",
    "#2471A3",
    "#1ABC9C",
    "#229954",
    "#D4AC0D",
    "#CA6F1E",
    "#A6ACAF",
    "#283747",
    "#CA6F1E",
    "#A6ACAF",
    "#283747",
    "#229954",
    "#D4AC0D",
    "#CA6F1E"
  ];

  const data = [
    {
      name: "Node js",
    },
    {
      name: "Next js",
    },
    {
      name: "React js",
    },
    {
      name: "Vanilla js",
    },

    {
      name: "Django",
    },
    {
      name: "Flask",
    },
    {
      name: "Python",
    },
    {
      name: "C",
    },
    {
      name: "SQL",
    },
    {
      name: "Git",
    },
    {
      name: "Github",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "TailwindCSS",
    },
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(6);
  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-md-6 col-sm-12"
              key={index}
            >
              <div
                className={
                  index === 0
                    ? "tech-content tech-content-marked"
                    : "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
