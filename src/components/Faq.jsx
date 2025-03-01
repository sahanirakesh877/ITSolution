import React from "react";

const Faq = () => {
  return (
    <>
      <section className="choose-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Choose Paso</span>
            <h2>We Achieved People’s Trust by Our Great Service</h2>
            <p>
              {" "}
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
                    <li className="accordion-item">
                      <div className="icon">
                        <i className="flaticon-friends" />
                      </div>
                      <a
                        className="accordion-title active"
                        href="javascript:void(0)"
                      >
                        <i className="bx bx-plus" /> Great Understanding
                      </a>
                      <p className="accordion-content show">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt sit amet consectetur
                        adipiscing.
                      </p>
                    </li>
                    <li className="accordion-item">
                      <div className="icon">
                        <i className="flaticon-chip" />
                      </div>
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="bx bx-plus" />
                        Update Technology
                      </a>
                      <p className="accordion-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt sit amet consectetur
                        adipiscing.
                      </p>
                    </li>
                    <li className="accordion-item">
                      <div className="icon">
                        <i className="flaticon-like" />
                      </div>
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="bx bx-plus" />
                        Experienced Team
                      </a>
                      <p className="accordion-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt sit amet consectetur
                        adipiscing.
                      </p>
                    </li>
                    <li className="accordion-item">
                      <div className="icon">
                        <i className="flaticon-award" />
                      </div>
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="bx bx-plus" />
                        Best Quality Service
                      </a>
                      <p className="accordion-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt sit amet consectetur
                        adipiscing.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
