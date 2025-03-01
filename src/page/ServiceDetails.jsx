import React from "react";
import { useParams } from "react-router-dom";
import servicedata from "../data/serviceData";

const ServiceDetails = () => {
  const {title}=useParams()
  const service = servicedata.find((item) => item.title.toLowerCase().replace(/\s+/g, '-') === title); // Find the service by title
  if (!service) {
    return <div>Service not found!</div>; // Handle invalid IDs
  }
  return (
    <>
      {/* Start Page Title Area */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Solutions Details</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Solutions</li>
              <li className="active">Solutions Details</li>
            </ul>
          </div>
        </div>
        <div className="page-shape">
          <div className="shape1">
            <img src="/assets/images/shape/1.png" alt="shape" />
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
      </div>
      {/* End Page Title Area */}

      {/* Start Services Details Area */}
      <section className="services-details-area ptb-100">
        <div className="container">
        
          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <img
                    src="/assets/images/solutions-details/5.png"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>{service.title}</h3>
                <br />
                <h4 className="text-dark">{service.subtitle}</h4>
                <br />
                <p>
                {service.description}
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </section>
      {/* End Services Details Area */}
    </>
  );
};

export default ServiceDetails;
