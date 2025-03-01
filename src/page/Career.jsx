import React from "react";

const Career = () => {
  // Job listings data
  const jobListings = [
    {
      id: 1,
      title: "DevOps Engineer",
      no: 2,
    },
    {
      id: 2,
      title: "Software Engineer",
      no: 2,
    },
    {
      id: 3,
      title: "UI/UX Designer",
      no: 3,
    },
    {
      id: 4,
      title: "Data Scientist",
      no: 2,
    },
    {
      id: 5,
      title: "Product Manager",
      no: 1,
    },
    {
      id: 6,
      title: "Marketing Specialist",
      no: 5,
    },
  ];

  return (
    <>
      {/* Page Title Area */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Career</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Career</li>
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

      {/* Job Listing Section */}
      <section className="job-listing py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Current Openings</h2>
          <div className="row">
            {jobListings.map((job) => (
              <div className="col-md-4 mb-4" key={job.id}>
                <div className="card h-100 shadow border-0">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <h5 className="card-title mb-0">{job.title}</h5>{" "}
                    {/* mb-0 removes margin-bottom */}
                    <div
                      className="border p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "50px", height: "50px" }} // Fixed size for the circle
                    >
                      <h3 className="mb-0">{job.no}</h3>{" "}
                      {/* mb-0 removes margin-bottom */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mail Your CV Section */}
      <section className="mail-cv py-5 ">
        <div className="container text-center">
          <h2 className="mb-2">Drop Your CV</h2>
          <p className="lead mb-4">
            Send your CV to us via email or WhatsApp for consideration.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="mailto:careers@example.com" className="box-btn ">
              <i className="fas fa-envelope me-2 "></i>Email CV
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Join Us?</h2>
          <div className="row">
            {/* Benefit 1 */}
            <div className="col-md-4 text-center mb-4 shadow">
              <div className="benefit-icon mb-3">
                <i className="fas fa-users fa-3x text-primary"></i>
              </div>
              <h5>Collaborative Environment</h5>
              <p>
                Work with a talented and supportive team that values
                collaboration.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="col-md-4 text-center mb-4 shadow">
              <div className="benefit-icon mb-3">
                <i className="fas fa-chart-line fa-3x text-primary"></i>
              </div>
              <h5>Career Growth</h5>
              <p>
                Opportunities for professional development and career
                advancement.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="col-md-4 text-center mb-4 shadow">
              <div className="benefit-icon mb-3">
                <i className="fas fa-balance-scale fa-3x text-primary"></i>
              </div>
              <h5>Work-Life Balance</h5>
              <p>
                Flexible working hours and remote work options to ensure a
                healthy work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
