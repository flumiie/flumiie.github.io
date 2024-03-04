import React, { useEffect } from "react";

import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const NotFound = () => {
  useEffect(() => {
    document.title += " | 404";
  }, []);

  return (
    <div className="App container">
      {/* <header className="App-header">
                <MainNavbar /> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* </header> */}

      <div className="row" id="homepage-row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6" id="err-404-content">
          <h1>404</h1>
          <p>
            The page you're looking is not available or broken.
            <br />
            Try the links above.
          </p>
          <br />
          <br />
        </div>
        <div className="col-sm-3"></div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
