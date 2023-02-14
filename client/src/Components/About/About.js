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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                reprehenderit ipsam laborum voluptas blanditiis nemo, architecto
                illum amet culpa quasi esse numquam iusto. Adipisci placeat
                dignissimos eligendi mollitia magni. Veniam! Veritatis
                laudantium excepturi eum expedita tempora quibusdam nisi
                voluptates itaque, obcaecati et, repellendus autem accusamus
                ratione aliquam aperiam dolore veniam ipsum reprehenderit ut
                earum, ex optio quaerat. Quas, nostrum recusandae. Amet ad
                officia maiores quasi reprehenderit, nulla tempore, aliquid unde
                laudantium fuga dolorem ipsa repellat error sit! Eos, aspernatur
                laboriosam officia incidunt repudiandae soluta hic cumque odit
                fugiat in vero!
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
