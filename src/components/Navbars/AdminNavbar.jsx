import React, { useState } from "react";
import routes from "../../route.jsx";
import * as style from "../Navbars/AdminNavbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { userUserName } from "../../hooks/useUserName.jsx";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const routes_FirstPart = routes.slice(0, 5);
  const routes_SecondPart = routes.slice(6);
  // console.log("First Part: ", routes_FirstPart);
  // console.log("Second Part: ", routes_SecondPart);
  const {profile, setProfile, loading} = userUserName();
  return (
    <div>
      <Navbar 
        // expand="50%"
        className={style.AdminNavbar}
        style={{ direction: "ltr"}}
      >
        <NavbarToggler type="button" onClick={toggle} className={style.NavbarToggler}>
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </NavbarToggler>
        <Nav className={`${style.AdminNavbar_WithoutCollapse} ml-auto`} navbar>
            {
              routes_FirstPart.map((route) =>
                (
                  <NavItem key={route.rtlName}>
                    <NavLink href={route.layout + route.path}>
                      <i className={"tim-icons " + route.icon} />
                      {" "}
                      {route.rtlName}
                    </NavLink>
                  </NavItem>     
            ))}
            <NavItem className={style.logoutLink}>
                <NavLink href={`/profile/${profile}`}
                  onClick={() => {
                  }}
                >
                  <i className={"tim-icons icon-single-02"} />
                  {" "}
                  {"پروفایل"}
              </NavLink>
            </NavItem>
            {
              routes_SecondPart.map((route) =>
                (
                  <NavItem key={route.rtlName}>
                    <NavLink href={route.layout + route.path}>
                      <i className={"tim-icons " + route.icon} />
                      {" "}
                      {route.rtlName}
                    </NavLink>
                  </NavItem>     
            ))}
          <NavItem className={style.logoutLink}>
            <NavLink href="/"
              onClick={() => {
                localStorage.removeItem("authTokens");
              }}
            >
              <i className={"tim-icons icon-button-power"} />
              {" "}
              {"خروج"}
            </NavLink>
          </NavItem>
        </Nav>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {
              routes_FirstPart.map((route) =>
                (
                  <NavItem key={route.rtlName}>
                    <NavLink href={route.layout + route.path}>
                      <i className={"tim-icons " + route.icon} />
                      {" "}
                      {route.rtlName}
                    </NavLink>
                  </NavItem>     
            ))}
            <NavItem className={style.logoutLink}>
                <NavLink href={`/profile/${profile}`}
                  onClick={() => {
                  }}
                >
                  <i className={"tim-icons icon-single-02"} />
                  {" "}
                  {"پروفایل"}
              </NavLink>
            </NavItem>
            {
              routes_SecondPart.map((route) =>
                (
                  <NavItem key={route.rtlName}>
                    <NavLink href={route.layout + route.path}>
                      <i className={"tim-icons " + route.icon} />
                      {" "}
                      {route.rtlName}
                    </NavLink>
                  </NavItem>     
            ))}
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AdminNavbar;