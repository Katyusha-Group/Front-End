import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import { setLoginModalShow } from "./commonLogin";
import LoginModal from "../../views/LoginLms";
import LoginModalGolestan from "../../views/LoginGolestan";
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import routes from "../../route.jsx";
import "../Navbars/AdminNavbar.css";
import logo from "./logo1.png";
import { useNavigate, useLocation } from "react-router-dom";



// reactstrap components
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
  Container,
  Modal,
  ModalHeader,
  NavbarToggler,
  NavItem,
  Card,
  CardHeader,
  CardBody,
  Row,
  FormGroup,
} from "reactstrap";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  const [showLogin, setShowLogin] = useState(false);
  const [showLoginG, setShowLoginG] = useState(false);
  const location = useLocation();
  const [selected, setSelected] = useState({});

  useEffect(() => {
    // Set the selected state based on the current URL path
    const path = location.pathname;
    const newSelected = {};
    routes.forEach((route) => {
      if (route.layout + route.path === path) {
        newSelected[route.rtlName] = true;
      } else {
        newSelected[route.rtlName] = false;
      }
    });
    setSelected(newSelected);

    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  }, [location]);

  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };
  const r = [1, 2, 3];

  return (
    <>
      <Navbar className={classNames("navbar-absolute", color, "rtl")} expand="xl">
        <Collapse navbar isOpen={collapseOpen}>
          <Nav className="wideNavbar" navbar>
          <NavLink href="/admin/page" className="nav-header nav-link-icon">
                    <img src={logo} alt=""  style={{height:"34px" , width:"300px"}}/>
                    {/* <i className="tim-icons icon-atom ml-0" /> */}
                  </NavLink>
            {routes.map(
              (route) => (
                <NavItem key={route.rtlName}>
                  <NavLink
                    href={route.layout + route.path}
                    className={classNames({
                      "selected": selected[route.rtlName],
                    })}
                  >
                    <i className={"tim-icons " + route.icon} />
                    {" "}
                    {route.rtlName}
                  </NavLink>
                </NavItem>
              )
            )}
            <NavItem className="logoutLink">
              <NavLink href="/landingPage"
                onClick={() => {
                  localStorage.removeItem("authTokens");
                  //localStorage.setItem('authTokens', "");
                  
                }}
              >
                <i className={"tim-icons icon-button-power"} />
                {" "}
                {"خروج"}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default AdminNavbar;