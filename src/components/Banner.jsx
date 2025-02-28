import React from "react";

const Banner = () => {
  return (
    <>
      <section className="banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-content">
                    <h1>Trusted Effective Service and Solutions</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      et sed do eiusmod tempor incididunt labore dolore magna
                      aliqua. Quis ipsum suspendisse.
                    </p>
                    <div className="banner-btn">
                      <a href="contact.html" className="box-btn">
                        Contact Us
                      </a>
                      <a href="about.html" className="box-btn border-btn">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-img">
                    <img
                      src="/assets/images/home-bg-1-img.png"
                      alt="banner-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-shape">
          <div className="shape1">
            <img src="/assets/images/shape/1.png" alt="shape" />
          </div>
          <div className="shape2">
            <img src="/assets/images/shape/2.png" alt="shape" />
          </div>
          <div className="shape3">
            <img src="/assets/images/shape/3.png" alt="shape" />
          </div>
          <div className="shape4">
            <img src="/assets/images/shape/4.png" alt="shape" />
          </div>
          <div className="shape5">
            <img src="/assets/images/shape/5.png" alt="shape" />
          </div>
          <div className="shape6">
            <img src="/assets/images/shape/6.png" alt="shape" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
