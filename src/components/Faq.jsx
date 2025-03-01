import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  const faqItems = [
    {
      icon: "flaticon-friends",
      title: "Great Understanding",
      content:
      "We are a trusted IT solutions provider with a proven track record of delivering innovative and reliable services to businesses worldwide.",
    },
    {
      icon: "flaticon-chip",
      title: "Update Technology",
      content:
      "We are a trusted IT solutions provider with a proven track record of delivering innovative and reliable services to businesses worldwide.",    },
    {
      icon: "flaticon-like",
      title: "Experienced Team",
      content:
      "Our team consists of highly skilled professionals with years of experience in software development, cybersecurity, and IT consulting.",
    },
    {
      icon: "flaticon-award",
      title: "Best Quality Service",
      content:
      "We prioritize quality, innovation, and customer satisfaction, ensuring that every project is delivered on time and exceeds expectations.",
    },
  ];

  return (
    <section className="choose-area ptb-100">
      <div className="container">
        <div className="section-title">
        <span>Why Choose Us?</span>
        <h2>Trusted IT Solutions for Your Business</h2>
        <p>
            We provide innovative and reliable IT solutions to help businesses
            thrive in the digital age. Explore why we are the preferred choice
            for our clients.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="choose-img">
              <img src="/svgf/svg4.png" alt="choose" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="choose-content">
              <div className="faq-accordion">
                <ul className="accordion">
                  {faqItems.map((item, index) => (
                    <li className="accordion-item" key={index}>
                      <div className="icon">
                        <i className={item.icon} />
                      </div>
                      <a
                        className={`accordion-title ${
                          activeIndex === index ? "active" : ""
                        }`}
                        href="#!"
                        onClick={() => handleAccordionClick(index)}
                      >
                        <i className="bx bx-plus" /> {item.title}
                      </a>
                      <p
                        className={`accordion-content ${
                          activeIndex === index ? "show" : ""
                        }`}
                      >
                        {item.content}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
