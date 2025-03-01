import React from "react";
import { FaEnvelope, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

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
            <li><a href="tel:+1123456789"><i className="bx bxs-phone-call" /> 9800000001</a></li>
            <li><a href="mailto:hello@paso.com"><i className="bx bxs-envelope" />netcorenepal@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-sm-4 text-right pl-0">
        <div className="header-content-right">
          <ul className="header-social">
            <li>
              <a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank"> <FaWhatsapp /></a>
            </li>
            <li>
              <a href="https://www.envelope.com/" target="_blank">  <FaEnvelope /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank"> <FaYoutube /></a>
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
