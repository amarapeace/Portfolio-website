import React from 'react'
import './SidebarList.css';
import ProfilePic from '../../image/profile_pic.jpg';
import {
  FcHome,
  FcBullish,
  FcNightPortrait,
  FcPhone,
  FcSalesPerformance,
  FcTodoList,
  FcFactory,
  FcGraduationCap,
} from "react-icons/fc";
import {Link} from 'react-scroll'

const SidebarList = ({ expandSidebar }) => {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={ProfilePic} alt="profilepicture" />
          </div>
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={25} /> Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBullish size={25} /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcGraduationCap size={25} /> Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcSalesPerformance size={25} /> Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcPhone size={25} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navitems-only-icons">
          <ul>
            <li className="nav-item">
              {" "}
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={25} />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBullish size={25} />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcGraduationCap size={25} />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcSalesPerformance size={25} />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcPhone size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarList