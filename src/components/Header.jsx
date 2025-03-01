import React from "react";

const Header = () => {
  return (
    <>
  <header className="header-area">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-2 col-sm-0">
        <div className="logo ">
          <a href="/"><img src="/logos.png" alt="logo" /></a>
        </div>
      </div>
      <div className="col-lg-8 col-sm-8 text-right pr-0 ">
        <div className="header-content-right">
          <ul className="header-contact">
            <li><a href="tel:+1123456789"><i className="bx bxs-phone-call" /> +1 123 456 789</a></li>
            <li><a href="mailto:hello@paso.com"><i className="bx bxs-envelope" />netcorenepal@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-sm-4 text-right pl-0">
        <div className="header-content-right">
          <ul className="header-social">
            <li>
              <a href="https://www.facebook.com/" target="_blank"><i className="bx bxl-facebook" /></a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank"><i className="bx bxl-twitter" /></a>
            </li>
            <li>
              <a href="https://www.envelope.com/" target="_blank"> <i className="bx bxs-envelope" /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank"> <i className="bx bxl-youtube" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>


 
    </>
  );
};

export default Header;
