import React from "react";

const About = () => {
  return (
    <>
      <section className="home-company-area bg-color">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="company-content">
                <div className="company-tittle">
                  <span>About Us</span>
                  <h2>Innovative It Helping Service All Over the World</h2>
                  <p>
                    We are a leading IT solutions provider dedicated to helping
                    businesses thrive in the digital age. With a focus on
                    innovation, reliability, and customer satisfaction, we
                    deliver cutting-edge technology solutions tailored to your
                    unique needs.
                  </p>
                  <p>
                    Our team of experts specializes in software development,
                    cloud computing, cybersecurity, and IT consulting. We work
                    closely with our clients to ensure their success in an
                    ever-evolving technological landscape.
                  </p>
                </div>
                <a href="/about" className="box-btn">
                  Know More
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="company-img">
                <img src="/svg/svg4.jpg" alt="company" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
