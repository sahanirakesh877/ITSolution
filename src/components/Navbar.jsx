import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-area ">
        <div className="mobile-nav ">
          <Link to="/" className="logo  ">
            <img src="/logos.png" alt="logo" />
          </Link>
          {/* <Link to="/" className="logo  ">
            <img src="/logo.png" alt="logo" />
          </Link> */}
        </div>
        <div className="main-nav ">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav text-left  ">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/service" className="nav-link ">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/career" className="nav-link">
                      Career{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-btn">
                <a to="/contact" className="box-btn">
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
