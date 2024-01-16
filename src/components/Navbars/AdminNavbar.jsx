import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import routes from "../../route.jsx";
import * as style from "../Navbars/AdminNavbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

// reactstrap components
import {
  Collapse,
  Navbar,
  NavLink,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from "reactstrap";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  const location = useLocation();
  const [selected, setSelected] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
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
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  }, [location]);

  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };

  const r = [1, 2, 3];
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // console.log(typeof(routes));
  const First_Part = routes.slice(0, 2);
  // console.log ("First Part is: ", First_Part);
  const Second_Part = routes.slice(2);
  // console.log ("Second Part is: ", Second_Part);
  return (
    <>
      <div className={style.NavbarRes}>
        <Navbar className={classNames("navbar-absolute", color, style.rtl)} style={{direction:"rtl", position: "relative"}} expand="xl" id="navbar-absolute">
          {/* <Collapse navbar isOpen={collapseOpen}> */}
            <Nav className={style.wideNavbar} navbar>
              {/* <NavLink href="/home/page" className="nav-header nav-link-icon">
                <img src={logo} alt="" style={{ height: "34px", width: "40px" }} />
              </NavLink> */}
              {First_Part.map(
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
              <Collapse navbar isOpen={collapseOpen} className={style.Collapse_Main}>
                {Second_Part.map(
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
                <NavItem className={style.logoutLink}>
                  <NavLink href="/"
                    onClick={() => {
                    }}
                  >
                    <i className={"tim-icons icon-button-power"} />
                    {" "}
                    {"خروج"}
                  </NavLink>
                </NavItem>
              </Collapse>
              <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggleDropdown} className={style.Dropdown}>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right className={style.DropdownMenu}>
                  {/* <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem> */}
                  {Second_Part.map(
                    (route) => (
                      <DropdownItem key={route.rtlName}>
                        <NavLink
                          href={route.layout + route.path}
                          // className={classNames({
                          //   "selected": selected[route.rtlName],
                          // })}
                          className={style.DropdownItem}
                        >
                          <i className={"tim-icons " + route.icon} />
                          {" "}
                          {route.rtlName}
                        </NavLink>
                      </DropdownItem>
                    )
                  )}
                <DropdownItem className={style.logoutLink}>
                  <NavLink href="/"
                    onClick={() => {
                    }}
                    className={style.DropdownItem}
                  >
                    <i className={"tim-icons icon-button-power"} />
                    {" "}
                    {"خروج"}
                  </NavLink>
                </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          {/* </Collapse> */}
        </Navbar>
      </div>
    </>
  );
}

export default AdminNavbar;