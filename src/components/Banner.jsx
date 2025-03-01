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
                    <h1>Innovative Tech Solutions for Your Business</h1>
                    <p>
                    We provide cutting-edge technology solutions to help businesses thrive in the digital era. From software development to IT consulting, we ensure seamless innovation and growth.

                    </p>
                    <div className="banner-btn">
                      <a href="contact.html" className="box-btn">
                      Get in Touch
                      </a>
                      <a href="about.html" className="box-btn border-btn">
                      Learn More
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
