// import './App.css'
import React from 'react';
import * as Router from "react-router-dom";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper.jsx";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper.jsx";
import Home from "./views/Home.jsx"
import "./assets/css/black-dashboard-react.css";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Home from "./views/Home.jsx";

function App() {

  return (
    <>

       <ThemeContextWrapper>
        <BackgroundColorWrapper>
          <Router.BrowserRouter>
            <Router.Routes>
              <Router.Route path='/' element={<Home/>}></Router.Route>
            </Router.Routes>
          </Router.BrowserRouter>
        </BackgroundColorWrapper>
      </ThemeContextWrapper> 
    </>
  );
}

export default App
