import React from "react";
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import routes from "../route.jsx";
import logo from "../assets/img/react-logo.png";
import { useInfo } from "../contexts/InfoContext.jsx";
import { Card, CardHeader, CardTitle, Col, Row } from "reactstrap";
import * as Router from "react-router-dom";
import ChangePassword from "./ChangePass.jsx";
import LessonSidebar from "../components/LessonSidebar/LessonSidebar.jsx";
import classNames from "classnames";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  ModalHeader,
  NavbarToggler,
  NavItem,
} from "reactstrap";

export default function Admin() {
  const { info } = useInfo();
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );
  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setsidebarOpened(!sidebarOpened);
  };
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
  };
  document.body.classList.add("rtl", "menu-on-right");
  let head = document.head;
  let link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "rtl-id";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css";
  head.appendChild(link);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/home") {
        return (
          <Router.Route
            path={prop.path}
            element={<prop.component />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>

      <div className="wrapper">
        <LessonSidebar
          routes={routes}
          rtlActive
          logo={{
            outterLink: "https://www.creative-tim.com/",
            text: "کاتیوشا",
            imgSrc: logo,
          }}
          toggleSidebar={toggleSidebar}
        />
        <div className="main-panel">
          <div className="content admin-content" style={{}}>
            <Navbar className="px-0 navbar-admin">
              <Container className="m-0">
                <div className="navbar-wrapper">
                  <div
                    className={classNames("navbar-toggle d-inline", {
                      toggled: sidebarOpened,
                    })}
                  >
                    <NavbarToggler
                      type="button"
                      onClick={toggleSidebar}
                      style={{ outline: "none" }}
                    >
                      <span className="navbar-toggler-bar bar1" />
                      <span className="navbar-toggler-bar bar2" />
                      <span className="navbar-toggler-bar bar3" />
                    </NavbarToggler>
                  </div>
                </div>
              </Container>
            </Navbar>
            <Router.Routes>{getRoutes(routes)}</Router.Routes>
          </div>
        </div>
      </div>
    </>
  );
}
