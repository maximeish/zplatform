import React, { useState, useEffect } from "react";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import styles from "../styles/LandingView.module.css";

const Nav = () => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                alt="logo"
                className="h-14 w-14"
                src="https://ik.imagekit.io/zplatform/1077055_4175_axhoTZlDm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660512439956"
              />{" "}
              ZPlatform
            </Link>
          </div>

          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <UserButton />
              </li>
            </ul>
          </nav>
        </div>
        <nav className={styles.nav}>
          <button className={styles.navButton}>Home</button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
