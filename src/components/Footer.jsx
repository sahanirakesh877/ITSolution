import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="content">
                <div className="logo">
                  <a href="index.html">
                    <img src="/bglogo.jpeg" alt="logo"  style={{ width: "150px", height: "auto" }} />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do
                  eiusmod.
                </p>
               
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="content ml-15">
                <h3>Our Service</h3>
                <ul className="footer-list">
                  <li>
                    <a href="/service">Visual Design</a>
                  </li>
                  <li>
                    <a href="/service"> Development</a>
                  </li>
                  <li>
                    <a href="/service">QA &amp; Testing</a>
                  </li>
                  <li>
                    <a href="/service">IT Management</a>
                  </li>
                  <li>
                    <a href="/service">Cyber Security</a>
                  </li>
               
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="content">
                <h3>Quick Links</h3>
                <ul className="footer-list">
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/service">Service</a>
                  </li>
                  <li>
                    <a href="/">Career</a>
                  </li>
                  <li>
                    <a href="/">Privacy &amp; Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms &amp; Conditions</a>
                  </li>
                
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="content contacts">
                <h3 className="ml-40">Contact</h3>
                <ul className="footer-list foot-social">
                 
                  <li>
                    <a href="tel:+1975456789">
                      <i className="bx bx-phone" /> +1 975 456 789
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@paso.com">
                      <i className="bx bxs-envelope" /> hello@paso.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@paso.com">
                      <i className="bx bxs-envelope" /> support@paso.com
                    </a>
                  </li>
                  <li>
                    <i className="bx bxs-map" /> 28/A street, New York, USA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
     
      </footer>
    </>
  );
};

export default Footer;
