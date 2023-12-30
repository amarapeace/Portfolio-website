import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCV from './CV.pdf'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import {Fade} from "react-awesome-reveal";
import { Link } from "react-scroll";



const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={40} />
        ) : (
          <p className="sun-theme-icon">
            {" "}
            <BsSunFill size={40} />{" "}
          </p>
        )}
      </div>
      <div className="container home-content">
        <Fade left>
          <h1>Hi, I'm Amara Onwunzo</h1>

          <h3>
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Frontend Developer",
                  "Fullstack Instructor",
                  "REACT Developer",
                  "Webflow Developer"
                  
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </Fade>
        <Fade down>
          <div className="button-for-action">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <div className="hire-me-button">Hire Me</div>
            </Link>

            <div className="get-resume-button">
              <a href={MyCV} download="Amara_cv" target="blank">
                Get Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
