import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar-area">
        <div className="mobile-nav ">
          <a href="index.html" className="logo  ">
            <img src="/logos.png" alt="logo" />
          </a>
        </div>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav text-left  ">
                  <li className="nav-item">
                    <a href="/" className="nav-link active">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/about" className="nav-link">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/service" className="nav-link ">
                      Services
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/contact" className="nav-link">
                      Contact{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/career" className="nav-link">
                      Career{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="nav-btn">
                <a href="/contact" className="box-btn">
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
