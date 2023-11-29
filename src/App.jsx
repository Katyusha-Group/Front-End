import React from "react";
import * as Router from "react-router-dom";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper.jsx";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper.jsx";
import SignUp from "./views/SignUp.jsx";
import ForgetPassword from "./views/ForgetPassword.jsx";
import Login from "./views/Login.jsx";
import ChangePassword from "./views/ChangePass.jsx";
import Admin from "./views/Admin.jsx";
import "./assets/css/black-dashboard-react.css";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContextInfo from "./contexts/InfoContext.jsx";
import LandingPage from "./views/LandingPage.jsx";
import CoursesPanel from "./views/CoursesPanel/CoursesPanel.jsx";
import Shopping from "./views/Shopping/Shopping.jsx";
import Verification from "./views/Verification/Verification.jsx";
import UserProfile from "./views/UserPorfile/UserProfile.jsx";
import VerificationForgetPassword from "./views/Verification/VerificationForgetPassword.jsx";
import SetNewPassword from "./views/SetNewPassword.jsx";
import RequireAuth from "./components/RequirAuth/RequirAuth.jsx";
import PrivateRoute from "./components/RequirAuth/PrivateRoute.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { PrivatRoute } from "./global/functions.jsx";
import AboutUs from "./views/aboutUs/AboutUs.jsx";
import News from "./views/News/Orders.jsx";
import Notification from "./views/Notification/Notification.jsx";
import Profile from "./views/UserPorfile/Profile.jsx";
import Timelinepage from "./views/TimeLine/Timelinepage.jsx";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./views/404.jsx";
import InternalServerError from "./views/500.jsx";

function App() {
  document.documentElement.dir = "rtl";
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("authTokens") !== null
  );

  useEffect(() => {
    setIsLoggedIn(true);
  }, [isLoggedIn]);

  const logIn = () => setIsLoggedIn(true);

  const logOut = () => setIsLoggedIn(false);

  return (
    <>
      <ThemeContextWrapper>
        <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
          <BackgroundColorWrapper>
            <ContextInfo>
              <Router.BrowserRouter>
                <Router.Routes>
                  <Router.Route path="/" element={<LandingPage />}></Router.Route>
                  <Router.Route
                    path="/signup"
                    element={<SignUp />}
                  ></Router.Route>
                  <Router.Route
                    path="/verification"
                    element={<Verification />}
                  ></Router.Route>
                  <Router.Route
                    path="/verificationForgetPassword"
                    element={<VerificationForgetPassword />}
                  ></Router.Route>
                  <Router.Route
                    path="/setNewPassword"
                    element={<SetNewPassword />}
                  ></Router.Route>

                  <Router.Route
                    path="/home/*"
                    element={
                      <PrivatRoute>
                        <Admin />
                      </PrivatRoute>
                    }
                  ></Router.Route>
                  <Router.Route path="/login" element={<Login />}></Router.Route>
                  <Router.Route path="/forgetPassword" element={<ForgetPassword />}></Router.Route>
                  <Router.Route path="/aboutUs" element={<AboutUs />}></Router.Route>
                  <Router.Route path="/landingPage" element={<LandingPage />}></Router.Route>
                  <Router.Route path="/CoursesPanel" element={
                    <PrivatRoute>
                      <CoursesPanel />
                    </PrivatRoute>
                  }></Router.Route>
                  <Router.Route path="/shopping" element={
                    <PrivatRoute>
                      <Shopping />
                    </PrivatRoute>
                  }></Router.Route>
                  <Router.Route path="/user" element={
                    <PrivatRoute>
                      <UserProfile />
                    </PrivatRoute>
                  }></Router.Route>
                  <Router.Route path="/order" element={
                    <PrivatRoute>
                      <News />
                    </PrivatRoute>
                  }></Router.Route>
                  <Router.Route path="/notification" element={
                    <PrivatRoute>
                      <Notification />
                    </PrivatRoute>
                  }></Router.Route>
                  <Router.Route path="/profile/:id" element={
                    <Profile />
                  }></Router.Route>
                  <Router.Route path="/timeline" element={
                    <Timelinepage />
                  }></Router.Route>
                  <Router.Route
                    path="/500"
                    element={<InternalServerError />}
                  ></Router.Route>
                  <Router.Route
                    path="*"
                    element={<NotFound />}
                  ></Router.Route>
                </Router.Routes>
              </Router.BrowserRouter>
            </ContextInfo>
          </BackgroundColorWrapper>
        </ErrorBoundary>
      </ThemeContextWrapper>
    </>
  );
}

export default App;
