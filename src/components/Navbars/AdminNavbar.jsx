import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import { setLoginModalShow } from "./commonLogin";
import LoginModal from "../../views/LoginLms";
import LoginModalGolestan from "../../views/LoginGolestan";
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import routes from "../../route.jsx";
import "../Navbars/AdminNavbar.css";
import { useNavigate } from "react-router-dom";


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
  const [selected, setSelected] = useState(false);
  const Navigate = useNavigate();
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
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
      <Navbar className={classNames("navbar-absolute", color)} expand="xl">
        <Collapse navbar isOpen={collapseOpen}>
          <Nav className="mr-auto" navbar>
            {routes.map(
              x => (
                <NavItem>
                  <NavLink href={ x.layout + x.path}><i className= {"tim-icons "+ x.icon}/>{" "}{x.rtlName}</NavLink>
                </NavItem>
                
              )
            )}
            <NavItem className="logoutLink">
              <NavLink
              onClick={()=>{
                localStorage.setItem('authTokens', "");
                Navigate("/login")
              }}
              ><i className= {"tim-icons icon-button-power"}/>{" خروج"}
              </NavLink>
            </NavItem>
            {/* <InputGroup className="search-bar">
              <Button color="link" onClick={toggleModalSearch}>
                <i className="tim-icons icon-zoom-split" />
                <span className="d-lg-none d-md-block">Search</span>
              </Button>
            </InputGroup> */}
            {/* <UncontrolledDropdown nav style={{ "width":"55%"}} >
              <DropdownToggle caret color="default" data-toggle="dropdown"  nav>
                <div className="notification d-none d-lg-block d-xl-block" />
                <i className="tim-icons icon-sound-wave" />
                <p className="d-lg-none">Notifications</p>
              </DropdownToggle>
              <DropdownMenu className="dropdown-navbar" tag="ul" end>
                <NavLink tag="li">
                  <DropdownItem className="nav-item">سلام</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            {/* <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <div className="photo">
                  <img alt="..." src={require("assets/img/anime3.png")} />
                </div>
                <b className="caret d-none d-lg-block d-xl-block" />
                <p className="d-lg-none">Log out</p>
              </DropdownToggle>
              <DropdownMenu className="dropdown-navbar" tag="ul">
                <NavLink tag="li">
                  <DropdownItem className="nav-item">پروفایل</DropdownItem>
                </NavLink>
                <NavLink tag="li">
                  <DropdownItem className="nav-item">تنظیمات</DropdownItem>
                </NavLink>
                <DropdownItem divider tag="li" />
                <NavLink tag="li">
                  <DropdownItem className="nav-item">خروج</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            {/* <li className="separator d-lg-none" /> */}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

// AdminNavbar.propTypes = {
//   // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
//   // insde the links of this component
//   rtlActive: PropTypes.bool,
//   routes: PropTypes.arrayOf(PropTypes.object),
//   logo: PropTypes.shape({
//     // innerLink is for links that will direct the user within the app
//     // it will be rendered as <Link to="...">...</Link> tag
//     innerLink: PropTypes.string,
//     // outterLink is for links that will direct the user outside the app
//     // it will be rendered as simple <a href="...">...</a> tag
//     outterLink: PropTypes.string,
//     // the text of the logo
//     text: PropTypes.node,
//     // the image src of the logo
//     imgSrc: PropTypes.string
//   })
// };

export default AdminNavbar;
