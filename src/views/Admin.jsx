import React from "react";
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import routes from "../route.jsx";
import logo from "../assets/img/react-logo.png";
import { useInfo } from "../contexts/InfoContext.jsx";
import { Card, CardHeader, CardTitle, Col, Row } from "reactstrap";
import * as Router from 'react-router-dom';
import ChangePassword from "./ChangePass.jsx";
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
export default function Admin() {
    const {info} = useInfo()
    const [sidebarOpened, setsidebarOpened] = React.useState(
        document.documentElement.className.indexOf("nav-open") !== -1
      );
    const toggleSidebar = () => {
        console.log("toggle")
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
        if (prop.layout === "/admin") {
          console.log(prop.component)
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
      // return <Router.Route path="/admin/change" element={<ChangePassword/>}></Router.Route>
    };
  return (
    <>
      <div className="wrapper">
        <Sidebar
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
          <AdminNavbar 
          brandText={getBrandText(location.pathname)}
          toggleSidebar={toggleSidebar}
          sidebarOpened={sidebarOpened}
          />
          <div className="content">
            <Router.Routes>
            {getRoutes(routes)}
            </Router.Routes>
          </div>

        </div>
      </div>
    </>
  );
}