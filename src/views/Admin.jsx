import React from "react";
import { Route , Redirect} from "react-router-dom";
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import routes from "../route.jsx";
import logo from "../assets/img/react-logo.png";
import { useInfo } from "../contexts/InfoContext.jsx";
import { Card, CardHeader, CardTitle, Col, Row } from "reactstrap";
export default function Admin() {
    const {info} = useInfo()
    const [sidebarOpened, setsidebarOpened] = React.useState(
        document.documentElement.className.indexOf("nav-open") !== -1
      );
    const toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        setsidebarOpened(!sidebarOpened);
      };
      const getRoutes = (routes) => {
        return routes.map((prop, key) => {
          if (prop.layout === "/admin") {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                //key={key}
              />
            );
          } else {
            return null;
          }
        });
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
  return (
    <>
      <div className="wrapper">
        <Sidebar
          routes={routes}
          rtlActive
          logo={{
            outterLink: "https://lms.iust.ac.ir/",
            text: "کاتیوشا",
            imgSrc: logo,
          }}
          toggleSidebar={toggleSidebar}
        />
        
        <div className="main-panel">
          <AdminNavbar
            toggleSidebar={toggleSidebar}
            sidebarOpened={sidebarOpened} 
          />
          {/* <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/admin/dashboard" />
          </Switch> */}
          <div className="content">
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-right" sm="6">
                        <CardTitle tag="h2">{info.name}</CardTitle>
                      </Col>
                    </Row>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}