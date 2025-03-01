import React from "react";

const WorkProgress = () => {
  const processes = [
    {
      id: 1,
      icon: "assets/images/process/p1.png",
      nextIcon: "assets/images/process/next.png",
      title: "Research & Analysis",
      description:
        "We conduct in-depth research and analysis to understand your needs and market trends.",
    },
    {
      id: 2,
      icon: "assets/images/process/p2.png",
      nextIcon: "assets/images/process/next.png",
      title: "Prototype & Testing",
      description:
        "We create prototypes and rigorously test them to ensure they meet your requirements.",
    },
    {
      id: 3,
      icon: "assets/images/process/p3.png",
      nextIcon: "assets/images/process/next.png",
      title: "Development & Integration",
      description:
        "Our team develops and integrates the solution, ensuring scalability and performance.",
    },
    {
      id: 4,
      icon: "assets/images/process/p4.png",
      title: "Delivery & Support",
      description:
        "We deliver the final product and provide ongoing support to ensure your success.",
    },
  ];

  return (
    <section className="home-process-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Working Process</span>
          <h2>Our Proven Workflow for Success</h2>
          <p>
            Our structured approach ensures that every project is delivered on
            time, within budget, and to the highest standards.
          </p>
        </div>
        <div className="row">
          {processes.map((process) => (
            <div className="col-lg-3 col-sm-6" key={process.id}>
              <div className="single-process">
                <div className="icon">
                  <img src={process.icon} alt="process" />
                  {process.nextIcon && (
                    <span>
                      <img src={process.nextIcon} alt="shape" />
                    </span>
                  )}
                </div>
                <div className="content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProgress;
