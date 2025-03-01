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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.",
    },
    {
      icon: "flaticon-chip",
      title: "Update Technology",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.",
    },
    {
      icon: "flaticon-like",
      title: "Experienced Team",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.",
    },
    {
      icon: "flaticon-award",
      title: "Best Quality Service",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.",
    },
  ];

  return (
    <section className="choose-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Choose Paso</span>
          <h2>We Achieved People’s Trust by Our Great Service</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="choose-img">
              <img src="assets/images/choose-img.png" alt="choose" />
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
