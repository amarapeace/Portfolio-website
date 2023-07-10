import React from "react";
import "./About.css";
import ProfilePic from "../../image/profile_pic.jpg";
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="profile pic" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>
            <Fade right>
              <p>
                Welcome to my portfolio! I am a Software developer with a passion
                for creating dynamic and responsive user interfaces. With
                experience in building complex web applications and mobile apps,
                I have a deep understanding of the React ecosystem and its
                various tools and libraries as well as its incorporation with NodeJs{" "}
              </p>
        
              <p>
                Whether you need a custom React application, integration with
                APIs or third-party services, or ongoing maintenance and support
                for your existing React application, I am excited to work with
                you and help you achieve your goals. Please take a look at my
                portfolio to see some of my past projects, and feel free to
                contact me if you have any questions or would like to discuss
                your next project.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
