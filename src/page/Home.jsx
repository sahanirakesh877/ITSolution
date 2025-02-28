import React from "react";
import Banner from "../components/Banner";
import About from "./About";
import Service from "./Service";
import WorkProgress from "../components/WorkProgress";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <Faq />
      <WorkProgress />
      <Testimonial/>
     
    </>
  );
};

export default Home;
