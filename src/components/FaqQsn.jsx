import React, { useState } from "react";

const FaqQsn = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      icon: "flaticon-friends", // Same icon for all FAQs
      title: "What services do you offer?",
      content:
        "We offer a wide range of IT solutions including software development, cloud services, cybersecurity, IT consulting, and digital transformation services.",
    },
    {
      icon: "flaticon-friends", // Same icon for all FAQs
      title: "How do you ensure data security?",
      content:
        "We implement industry-standard security measures such as encryption, firewalls, regular security audits, and employee training to protect your data.",
    },
    {
      icon: "flaticon-friends", // Same icon for all FAQs
      title: "Do you provide 24/7 support?",
      content:
        "Yes, we offer 24/7 technical support to ensure your systems are always up and running. Our team is available round the clock to assist you.",
    },
    {
      icon: "flaticon-friends", // Same icon for all FAQs
      title: "Can you customize solutions for my business?",
      content:
        "Absolutely! We tailor our IT solutions to meet the unique needs of your business, ensuring maximum efficiency and scalability.",
    },
    {
      icon: "flaticon-friends", // Same icon for all FAQs
      title: "What industries do you serve?",
      content:
        "We serve a variety of industries including healthcare, finance, education, retail, and manufacturing, providing customized IT solutions for each sector.",
    },
    {
      icon: "flaticon-friends", // Same icon for all FAQs
      title: "How do you handle software updates?",
      content:
        "We provide regular software updates and patches to ensure your systems are secure, up-to-date, and running smoothly.",
    },
    {
      icon: "flaticon-friends", // Same icon for all FAQs
      title: "What is your approach to project management?",
      content:
        "We use agile methodologies to manage projects, ensuring transparency, flexibility, and timely delivery of solutions.",
    },
    {
      icon: "flaticon-friends", // Same icon for all FAQs
      title: "Do you offer cloud migration services?",
      content:
        "Yes, we specialize in cloud migration, helping businesses transition to the cloud seamlessly while minimizing downtime and risks.",
    },

    {
      icon: "flaticon-friends", // Same icon for all FAQs
      title: "What is your pricing model?",
      content:
        "Our pricing is flexible and depends on the scope of the project. We offer both fixed-price and hourly-rate models to suit your budget.",
    },
  ];

  return (
    <section className="choose-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>F.A.Q.</span>
          <h2>Need a Support?</h2>
          <p>
            Explore our frequently asked questions to find answers to common
            queries about our IT solutions and services.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="choose-content">
              <div className="faq-accordion">
                <ul className="accordion">
                  {faqItems.map((item, index) => (
                    <li className="accordion-item" key={index}>
                      <div className="icon">
                      <i className="bx bx-chevron-right" />                      </div>

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

export default FaqQsn;
