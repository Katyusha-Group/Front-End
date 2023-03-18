import React from "react";
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import routes from "../route.jsx";
import logo from "../assets/img/react-logo.png";

export default function Home() {
    const [sidebarOpened, setsidebarOpened] = React.useState(
        document.documentElement.className.indexOf("nav-open") !== -1
      );
    const toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        setsidebarOpened(!sidebarOpened);
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
      <AdminNavbar />
    </>
  );
}