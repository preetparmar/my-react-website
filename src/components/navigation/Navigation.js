// Importing Libraries
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

// Importing Files
import navStyles from "./Navigation.module.css";
import logo from "../../resources/images/logo/logo.png";
import resume from "../../resources/resume.pdf";

// Importing Components
import NavigationOpen from "./NavigationOpen";

// Main Function
const Navigation = () => {
  // Defining Variables
  const [navOpen, setNavOpen] = useState(false);

  // Defining Handlers
  const menuToggleHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Fragment>
      <header>
        <section
          className={`${navStyles.headerContainer} ${
            navOpen && navStyles.active
          }`}
        >
          <div className={navStyles.toggleContainer}>
            <div
              onClick={menuToggleHandler}
              className={`${navStyles.hamburgerContainer} ${
                navOpen && navStyles.open
              }`}
            >
              <div className={`${navStyles.hamburger}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={navStyles.cross}>
                <span></span>
                <span></span>
              </div>
            </div>
            <NavLink to="/home">
              <img className={navStyles.logo} src={logo} alt="logo" />
            </NavLink>
          </div>
          <NavigationOpen className={navStyles.navigationOpenContainer} />
          <div className={navStyles.listContainer}>
            <ul>
              <li>
                <NavLink exact activeClassName={navStyles.active} to="/">
                  Home
                </NavLink>
                <NavLink
                  exact
                  activeClassName={navStyles.active}
                  to="/education"
                >
                  Education
                </NavLink>
                <NavLink exact activeClassName={navStyles.active} to="/skills">
                  Skills
                </NavLink>
                <NavLink
                  exact
                  activeClassName={navStyles.active}
                  to="/experience"
                >
                  Experience
                </NavLink>
                <NavLink
                  exact
                  activeClassName={navStyles.active}
                  to="/projects"
                >
                  Projects
                </NavLink>
                <NavLink exact activeClassName={navStyles.active} to="/about">
                  About Me
                </NavLink>
                <a
                  href="https://blog.preetparmar.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </a>
                <a href={resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </section>
      </header>
    </Fragment>
  );
};

// Exporting
export default Navigation;
