import React from 'react'
import servicedata from '../data/serviceData';
import { Link, useLocation } from 'react-router-dom';

const Service = () => {
  const location=useLocation();
  return (
    <>
{/* Conditionally render the page-title-area only on the /service route */}
{location.pathname === '/service' && (
        <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
              <h2>Service</h2>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Service</li>
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
      )}


<section className="home-service-area pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <span>Smart Services</span>
      <h2>Paso Provide All Kind of Tech Solutions</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
    </div>
    <div className="row">
    {servicedata.map((service,title) => (
        <div className="col-lg-4 col-sm-6" key={service.id}>
          <div className="single-service">
            <div className="service-img">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p className='text-secondary'>{service.subtitle}</p>
              <Link to={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="line-bnt">
              Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="col-lg-4 col-sm-6">
        <div className="single-service">
          <div className="service-img">
            <img src="/assets/images/service/s1.png" alt="service" />
          </div>
          <div className="service-content">
            <h3>Visual Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
            <a href="solutions-details.html" className="line-bnt">
              Read More
            </a>
          </div>
        </div>
      </div> */}
      {/* <div className="col-lg-4 col-sm-6">
        <div className="single-service">
          <div className="service-img">
            <img src="/assets/images/service/s2.png" alt="service" />
          </div>
          <div className="service-content">
            <h3>Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
            <a href="solutions-details.html" className="line-bnt">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-service">
          <div className="service-img">
            <img src="/assets/images/service/s3.png" alt="service" />
          </div>
          <div className="service-content">
            <h3>QA Testing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
            <a href="solutions-details.html" className="line-bnt">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-service">
          <div className="service-img">
            <img src="/assets/images/service/s4.png" alt="service" />
          </div>
          <div className="service-content">
            <h3>IT Management</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
            <a href="solutions-details.html" className="line-bnt">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-service">
          <div className="service-img">
            <img src="/assets/images/service/s5.png" alt="service" />
          </div>
          <div className="service-content">
            <h3> Cyber Security</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
            <a href="solutions-details.html" className="line-bnt">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-service">
          <div className="service-img">
            <img src="/assets/images/service/s6.png" alt="service" />
          </div>
          <div className="service-content">
            <h3> Wireless Connectivity</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
            <a href="solutions-details.html" className="line-bnt">
              Read More
            </a>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>


    </>
  )
}

export default Service
