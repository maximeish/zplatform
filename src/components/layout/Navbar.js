import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar-fixed">
    <nav className="z-depth-0" style={{ height: "18vh" }}>
      <div className="nav-wrapper white">
        <Link
          to="/"
          style={{
            fontFamily: "monospace",
            marginTop: 24,
          }}
          className="col s5 brand-logo center black-text"
        >
          <img
            src="https://images.clerk.dev/uploaded/img_2DOCcyjZhIfOD6exEIBsT4GH7pc.jpeg"
            height={64}
            width={64}
            alt="logo"
          />{" "}
          {/* ZPlatform */}
        </Link>
      </div>
    </nav>
  </div>
);

export default Navbar;
