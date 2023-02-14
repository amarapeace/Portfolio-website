import React, {useState, createContext} from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Projects from "./Components/Projects/Projects";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobile from "./Components/Sidebar/NavbarMobile";

export const ThemeContext = createContext(null)

const App = () => {

  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <NavbarMobile theme={theme} changeTheme={changeTheme}/>

        <Sidebar theme={theme} changeTheme={changeTheme} />
        <About />
        <WorkExperience />

        <TechStack />
        <Education />
        <Projects />

        <Testimonial />
        <Contact />
      </div>
      <ScrollToTop
        smooth={true}
        color="white"
        height="20"
        width="20"
        top={20}
        style={{ borderRadius: "90px", backgroundColor: "black" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
