// import './App.css'
import React from "react";
import * as Router from "react-router-dom";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper.jsx";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper.jsx";
import SignUp from "./views/SignUp.jsx";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import ChangePassword from './views/ChangePass.jsx';
import Admin from './views/Admin.jsx';
import "./assets/css/black-dashboard-react.css";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContextInfo from "./contexts/InfoContext.jsx";
import LoginLms from './views/LoginLms.jsx';
import LandingPage from "./views/LandingPage.jsx"; 
import CoursesPanel from "./views/CoursesPanel/CoursesPanel.jsx";

function App() {
  return (
    <>
      {/* <SimpleBar style={{ maxHeight: '300px' }}> */}
      <ThemeContextWrapper>
        <BackgroundColorWrapper>
          <ContextInfo>
          {/* <SimpleBar style={{ maxHeight: '300px' }}> */}
            <Router.BrowserRouter>
              <Router.Routes>
                <Router.Route path="/" element={<Home />}></Router.Route>
                <Router.Route path="/signup" element={<SignUp />}></Router.Route>
                <Router.Route path="/admin/*" element={<Admin />}></Router.Route>
                <Router.Route path="/login" element={<Login />}></Router.Route>
                <Router.Route path="/loginLms" element={<LoginLms />}></Router.Route>
                <Router.Route path="/landingPage" element={<LandingPage />}></Router.Route>
                <Router.Route path="/CoursesPanel" element={<CoursesPanel />}></Router.Route>
              </Router.Routes>
            </Router.BrowserRouter>
            {/* </SimpleBar> */}
          </ContextInfo>
        </BackgroundColorWrapper>
      </ThemeContextWrapper>
      {/* </SimpleBar> */}
    </>
  );
}

export default App;
