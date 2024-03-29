import React from "react";
import { NavLink, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/img/Logo1.png";
import {
  Col,
  Nav,
  NavLink as ReactstrapNavLink,
  Row,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { apis } from "../../assets/apis";
import { BackgroundColorContext } from "../../contexts/BackgroundColorContext";
import * as style from "./LessonSidebar.module.css";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { usesProfileMe } from "../../hooks/useProfileMe.jsx";
import Spinner from "react-bootstrap/Spinner";
import { returnToken } from "../../Functions/returnToken.jsx";
import { useCheckAdmin } from "../../hooks/useCheckAdmin.jsx";
var ps;
const fetchRequest = "FETCH_REQUEST";
const fetchSuccess = "FETCH_SUCCESS";
const fetchFail = "FETCH_FAIL";
const reducer = (state, action) => {
  switch (action.type) {
    case fetchRequest:
      return { ...state, loading: true };
    case fetchSuccess:
      return { ...state, loading: false, props: action.payload };
    case fetchFail:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// function LessonSidebar(props) {
function LessonSidebar({ routes, logo, toggleSidebar }) {
  const getError = (error) => {
    return error.response && error.response.data
      ? error.response.data
      : error.message;
  };
  const sidebarRef = React.useRef(null);
  let [lessonState, setLessonState] = React.useState([]);
  const [department, setDepartment] = React.useState([]);
  const [allColleges, setAllColleges] = React.useState([]);
  const { isAdmin, setIsAdmin } = useCheckAdmin();
  const [selectedDep, setSelectedDep] = React.useState([]);
  const { profile, setProfile, loading2 } = usesProfileMe();
  const Navigate = useNavigate();
  const [{ loading, props: input, error }, propsSetter] = React.useReducer(
    reducer,
    { loading: true, props: {}, error: "" }
  );
  const token = returnToken();
  React.useEffect(() => {
    propsSetter({ type: fetchRequest });
    fetch(apis["departments"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        propsSetter({ type: fetchSuccess, payload: data.data });
        setDepartment(data);
      })
      .catch((error) => {
        propsSetter({ type: fetchFail, payload: getError(error) });

        console.error(error);
      });
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }, []);
  React.useEffect(() => {
    fetch(apis["departments"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((all_colleges_data) => {
        setAllColleges(all_colleges_data);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  }, []);

  const linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  // const { routes, rtlActive, logo } = props;
  let logoImg = null;
  let logoText = null;
  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <Link
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </Link>
      );
      logoText = (
        <Link
          href={logo.outterLink}
          className="simple-text logo-normal"
          target="_blank"
          onClick={toggleSidebar}
        >
          {logo.text}
        </Link>
      );
    } else {
      logoImg = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={toggleSidebar}
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
          onClick={toggleSidebar}
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
            <Nav>
              <Row className="nav-lessonSidebar">
                <Col md="5" xs="5" style={{ margin: "auto" }}>
                  <NavLink
                    to="/home/page"
                    className="nav-header nav-link-icon"
                    onClick={toggleSidebar}
                  >
                    <img src={logo1} alt="" style={{ height: "34px" }} />
                    <p
                      className="mr-2 small"
                      style={{ alignSelf: "center", fontSize: ".99rem" }}
                    >
                      کاتیوشا
                    </p>
                  </NavLink>
                </Col>
                <Col md="4" xs="4" style={{ margin: "auto" }}>
                  <NavLink
                    to="..\CoursesPanel"
                    className="nav-header nav-link-course"
                    style={{ minWidth: "67px" }}
                  >
                    پنل دروس
                  </NavLink>
                </Col>
                <Col md="3" xs="3" style={{ margin: "auto" }}>
                  <div className="nav-link-profile">
                    <UncontrolledDropdown className="backCol">
                      <DropdownToggle
                        className="m-0 pp-4"
                        color="link"
                        data-toggle="dropdown"
                      >
                        <i className="tim-icons icon-single-02 ml-0" />
                      </DropdownToggle>
                      <DropdownMenu
                        className="br-7"
                        aria-labelledby="dropdownMenuLink"
                        end
                      >
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            Navigate("../timeline");
                            toggleSidebar();
                          }}
                        >
                          <span className="tim-icons icon-chat-33" />
                          {"  "}
                          چتیوشا
                        </DropdownItem>
                        <DropdownItem
                          className="navbarDropDownItem"
                          href="http://localhost:5173/shopping"
                          onClick={(e) => {
                            e.preventDefault();
                            Navigate("/shopping");
                            toggleSidebar();
                          }}
                        >
                          <span className="tim-icons icon-basket-simple" />
                          {"  "}
                          سبد خرید
                        </DropdownItem>

                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            Navigate(`/profile/${profile.username}`);
                            toggleSidebar();
                          }}
                        >
                          <span className="tim-icons icon-badge" />
                          {"  "}
                          پروفایل
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            Navigate("../admin");
                            toggleSidebar();
                          }}
                          style={{ display: isAdmin ? "" : "none" }}
                        >
                          <span className="tim-icons icon-chart-bar-32" />
                          {"  "}
                          ادمین
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            Navigate("../aboutUs");
                            toggleSidebar();
                          }}
                        >
                          <span className="tim-icons icon-send" />
                          {"  "}
                          درباره ما
                        </DropdownItem>

                        <DropdownItem>
                          <span className="tim-icons icon-simple-remove" />
                          <Link
                            to="/"
                            onClick={() => {
                              localStorage.removeItem("authTokens");
                            }}
                          >
                            {"  "}
                            خروج
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </Col>
              </Row>
              <div className={style.lessonSidebar_component}>
                {loading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Spinner />
                  </div>
                ) : error ? (
                  "error"
                ) : (
                  department.map((prop, index) => {
                    if (prop.base_courses.length > 0) {
                      return (
                        <NavLink
                          className={
                            prop === selectedDep
                              ? "nav-link nav-link-lessonSidebar " +
                                style.selectedItem
                              : "nav-link nav-link-lessonSidebar"
                          }
                          onClick={() => {
                            setLessonState([prop]), setSelectedDep(prop);
                          }}
                          key={index}
                        >
                          <i className="tim-icons icon-chart-bar-32" />
                          <p>{prop.name}</p>
                        </NavLink>
                      );
                    }
                  })
                )}
                {loading ? (
                  ""
                ) : error ? (
                  ""
                ) : (
                  <NavLink
                    className={
                      allColleges === selectedDep
                        ? "nav-link nav-link-lessonSidebar selecteddItem"
                        : "nav-link nav-link-lessonSidebar"
                    }
                    onClick={() => {
                      setLessonState(allColleges);
                      setSelectedDep(allColleges);
                    }}
                  >
                    <i className="tim-icons icon-chart-bar-32" />
                    <p>همه دانشکده ها</p>
                  </NavLink>
                )}
              </div>
              <div className={style.lessonSidebar_component_lessons}>
                {lessonState ? <SearchBox data={lessonState} /> : null}
              </div>
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default LessonSidebar;
