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
          <div className="row">
            
            <div className="col-12">
              <div className="services-details-text">
                <h2>IT Management</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum not
                  only five centuries, but also the leap into.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there ist anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc. this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a dictionary of over 200 Latin
                  words, combined with a
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isnt anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc generators on the
                  Internet tend to repeat predefined chunks as necessary, making
                  this the first generator dictionary of over 200 Latin words,
                  combined with a.
                </p>
              </div>
            </div>
          </div>

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
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isnt anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition
                  necessary, making this the first as necessary, making this
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
