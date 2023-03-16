// import './App.css'
import React from 'react'
import * as Router from "react-router-dom";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper.jsx";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper.jsx";

function App() {

  return (
    <>
      <ThemeContextWrapper>
        <BackgroundColorWrapper>
          <Router.BrowserRouter>
           <Router.Switch>
             <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
           </Router.Switch>
          </Router.BrowserRouter>
        </BackgroundColorWrapper>
      </ThemeContextWrapper>
    </>
  );
}

export default App
