/*eslint-disable*/
import React from "react";

import { NavLink, Link, useLocation } from "react-router-dom";

// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";

import {
  BackgroundColorContext,
  backgroundColors,
} from "../../contexts/BackgroundColorContext";

import "./LessonSidebar.css"

import classData from "../../assets/data/data.json"

import { useInfo } from "../../contexts/InfoContext";

import SearchBox from "../SearchBox/SearchBox.jsx"


var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebarRef = React.useRef(null);
  let [lessonState, setLessonState] = React.useState([]);
  const [departeman, setDeparteman] = React.useState([]);
  const {info,changeInfo}=useInfo()
  // verifies if routeName is the one active (in browser input)
  // const myHeaders = new Headers();

  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  // console.log(tokenClass);

  const token = tokenClass.token.access;
  // myHeaders.append("Authorization", `Bearer ${token}` );
  // console.log(myHeaders)
  React.useEffect(() => {
    fetch("https://www.katyushaiust.ir/departments/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setDeparteman(data);
      })
      .catch((error) => console.error(error));
    // console.log(data);
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }, []);

  React.useEffect(() => {
    if (navigator.userAgentData.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.userAgentData.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  const linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  const { routes, rtlActive, logo } = props;
  let logoImg = null;
  let logoText = null;
  //   rtlActive = true;
  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </a>
      );
      logoText = (
        <a
          href={logo.outterLink}
          className="simple-text logo-normal"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </a>
      );
    } else {
      logoImg = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </Link>
      );
      logoText = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-normal"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </Link>
      );
    }
  }
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={"normal"}>
          <div className="sidebar-wrapper" ref={sidebarRef}>
            {logoImg !== null || logoText !== null ? (
              <div className="logo">
                {logoImg}
                {logoText}
              </div>
            ) : null}
            <Nav>
              <div className="lessonSidebar_component">
                {departeman.map((prop) => (
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    onClick={() => setLessonState(prop
                      )}
                  >
                    <i />
                    <p>{prop.name}</p>
                  </NavLink>
                ))}
              </div>
              <div className="lessonSidebar_component lessonSidebar_component-lessons">
                {
                  lessonState ? (
                    <SearchBox data={lessonState?.base_courses
                    } />
                    ) : null}
                    {/* {console.log("props", lessonState.base_courses)} */}
                {/* {console.log(lessonState)} */}
                {/* {lessonState?.base_course.map((prop) => (
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i />
                    <p onClick={()=>{changeInfo("courseGroupID",prop.course_ID);}}>{prop.course_name}</p>
                  </NavLink>
                ))} */}
              </div>
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    text: PropTypes.node,
    imgSrc: PropTypes.string,
  }),
};

export default Sidebar;
