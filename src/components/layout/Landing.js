import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div style={{ height: "80vh" }} className="container valign-wrapper">
    <div className="row">
      <div className="col s12 center-align">
        <h4 style={{ fontWeight: 600 }} data-testid="welcome-text">
          Welcome to ZPlatform provided to you by Company Z
        </h4>
        <p className="flow-text grey-text text-darken-1">
          Access various online services with ease
        </p>
        <br />
        <div className="col s6">
          <Link
            to="/register"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Register
          </Link>
        </div>
        <div className="col s6">
          <Link
            to="/login"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
            }}
            className="btn btn-large btn-flat waves-effect white black-text"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
