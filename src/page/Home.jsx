import React from "react";
import Banner from "../components/Banner";
import Service from "./Service";
import WorkProgress from "../components/WorkProgress";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <About/>
      <Faq />
      <WorkProgress />
      <Testimonial/>
     
    </>
  );
};

export default Home;
