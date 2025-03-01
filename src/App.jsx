import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./page/Home";
import Service from "./page/Service";
import Contact from "./page/Contact";
import ServiceDetails from "./page/ServiceDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeAbout from "./page/HomeAbout";
import Career from "./page/Career";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript("/assets/js/jquery.min.js");
    loadScript("/assets/js/bootstrap.bundle.min.js");
    loadScript("/assets/js/meanmenu.min.js");
    loadScript("/assets/js/magnific-popup.min.js");
    loadScript("/assets/js/owl.carousel.min.js");
    loadScript("/assets/js/wow.min.js");
    loadScript("/assets/js/isotope.pkgd.min.js");
    loadScript("/assets/js/ajaxchimp.min.js");
    loadScript("/assets/js/form-validator.min.js");
    loadScript("/assets/js/contact-form-script.js");
    loadScript("/assets/js/mains.js");

    return () => {
      document.querySelectorAll("script").forEach((script) => script.remove());
    };
  }, []);
  return (
    <>
      {!isMobile && <Header />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:title" element={<ServiceDetails />} />
        <Route path="/about" element={<HomeAbout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
