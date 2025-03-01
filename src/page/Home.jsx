import React from "react";
import Banner from "../components/Banner";
import Service from "./Service";
import WorkProgress from "../components/WorkProgress";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import TechnlogyUsed from "../components/TechnlogyUsed";
import FaqQsn from "../components/FaqQsn";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <TechnlogyUsed />
      <About />
      <Faq />
      <WorkProgress />
      <Testimonial />
      <FaqQsn />
    </>
  );
};

export default Home;
