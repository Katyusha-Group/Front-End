/*eslint-disable*/
import React from "react";

import { NavLink, Link } from "react-router-dom";

// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import {
  Button,
  Col,
  Nav,
  NavLink as ReactstrapNavLink,
  Row,
} from "reactstrap";

import {
  BackgroundColorContext,
  backgroundColors,
} from "../../contexts/BackgroundColorContext";

import "./LessonSidebar.css";

import * as log from "../../assets/img/react-logo.png";

// import * as log from "../../assets/img/react-logo.png";

import classData from "../../assets/data/data.json";

import SearchBox from "../SearchBox/SearchBox.jsx";

import CoursesPanel from "../../views/CoursesPanel/CoursesPanel";

var ps;

function Sidebar(props) {
  const sidebarRef = React.useRef(null);
  let [lessonState, setLessonState] = React.useState([]);
  const [departeman, setDeparteman] = React.useState([]);
  const [allColleges, setAllColleges] = React.useState([]);
  // const [allColleges, setAllColleges] = React.useState([]);

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
        // console.log("data all",data);
        setDeparteman(data);
      })
      .catch((error) => console.error(error));
    // console.log(data);
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }, []);
  React.useEffect(() => {
    fetch("https://www.katyushaiust.ir/departments/all", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((all_colleges_data) => {
        // changeInfoState("courseChoosed", all_colleges_data);
        console.log("all Colleges", all_colleges_data);
        console.log("all Colleges type", typeof all_colleges_data);
        setAllColleges(all_colleges_data);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
    console.log("all Colleges state", allColleges);
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
            {/* {logoImg !== null || logoText !== null ? (
              <div className="logo">
                {logoImg}
                {logoText}
              </div>
            ) : null} */}
            <Nav>
              <Row className="nav-lessonSidebar">
                <Col md="5">
                  <NavLink className="nav-header nav-link-icon">
                    <i className="tim-icons icon-atom" />
                  </NavLink>
                </Col>
                <Col md="4">
                  <NavLink className="nav-header nav-link-course">
                    پنل دروس
                  </NavLink>
                </Col>
                <Col md="3">
                  <NavLink className="nav-header nav-link-profile">
                    <i className="tim-icons icon-single-02"></i>
                  </NavLink>
                </Col>
              </Row>
              <div className="lessonSidebar_component">
                {departeman.map((prop, index) => {
                  if (prop.base_courses.length > 0) {
                    return (
                      <NavLink
                        className="nav-link nav-link-lessonSidebar"
                        activeClassName="active"
                        onClick={() => setLessonState([prop])}
                        key={index}
                      >
                        <i className="tim-icons icon-chart-bar-32" />
                        <p>{prop.name}</p>
                      </NavLink>
                    );
                  }
                })}
                <NavLink
                  className="nav-link nav-link-lessonSidebar"
                  activeClassName="active"
                  onClick={() => {
                    setLessonState(allColleges);
                    // console.log("all colleges in onclick",allColleges);
                    // console.log("lesson state in onclick",lessonState);
                  }}
                  // key={index}
                >
                  <i className="tim-icons icon-chart-bar-32" />
                  <p>همه دانشکده ها</p>
                </NavLink>
              </div>
              <div className="lessonSidebar_component-lessons">
                {lessonState ? <SearchBox data={lessonState} /> : null}
                {/* {console.log("props", lessonState.base_courses)} */}
                {/* {console.log(lessonState)} */}
                {/* {console.log(window.location.pathname)} */}
                {/* {lessonState?.base_course.map((prop) => (
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i />
                    <p>{prop.course_name}</p>
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
