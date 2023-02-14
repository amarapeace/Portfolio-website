import React, { useState } from 'react'
import Switch from "react-switch";
import './NavbarMobile.css'
import {GiHamburgerMenu} from 'react-icons/gi'
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
import { Link } from "react-scroll";

const NavbarMobile = ({ theme, changeTheme }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
      </div>
      {open && (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
              <Switch onChange={changeTheme} checked={theme === "light"} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile