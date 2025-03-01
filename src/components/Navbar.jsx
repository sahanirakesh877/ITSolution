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
                    <a href="/" className="nav-link dropdown-toggle active">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/about" className="nav-link">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/service" className="nav-link">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/service/:1" className="nav-link">
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li>

                

                  <li className="nav-item">
                    <a href="/tech" className="nav-link">
                      Technology{" "}
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/contact" className="nav-link">
                      Contact{" "}
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
