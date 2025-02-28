import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Home from "./page/Home";
import Service from "./page/Service";
import About from "./page/About";
import Contact from "./page/Contact";
import ServiceDetails from "./page/ServiceDetails";
import Blog from "./page/Blog";
import BlogDetails from "./page/BlogDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
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
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
