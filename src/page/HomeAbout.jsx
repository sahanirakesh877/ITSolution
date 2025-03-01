import React from 'react'

const HomeAbout = () => {
  return (
    <>

  {/* Start Page Title Area */}
  <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>About</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">About</li>
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

      {/* Company Area */}
      <section className="home-company-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="company-content">
                <div className="company-tittle">
                  <span>Our Company</span>
                  <h2>Innovative It Helping Service Allover the World</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the rea dable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it has
                    a more or less normal distribution of letters, as opposed to
                    using Content here,content here normal distribution looking
                    at its.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the rea dable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it has
                    a more or less normal distribution of letters, as opposed to
                    using Content here,content here normal distribution looking
                    at its.
                  </p>
                </div>
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
      {/* End Company Area */}

      {/* Start Technology Area */}
      <section className="technology-area ptb-100 bg-color">
        <div className="container">
          <div className="row align-items-center choose-c">
            <div className="col-lg-6">
              <div className="choose-img">
                <img src="assets/images/choose-img1.jpg" alt="choose" />
                <div className="technology-video">
                  <a
                    href="https://www.youtube.com/watch?v=TdSA7gkVYU0"
                    className="video-btn popup-youtube"
                  >
                    <i className="bx bx-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="technology-content">
                <h2>Updated Technology</h2>
                <p>
                  You need to be sure there isnt anything embarrassing hidden
                  in the middle of text. All the Lorem Ipsum generators on the
                  Internet tend to repeat predefined chunks as necessary, making
                  this the first true generator on the Internet. It uses a
                  dictionary of over 200 Latin words, combined with.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going There are many
                  variations of passages of Lorem Ipsum available, but the.
                </p>
                <a href="/contact" className="box-btn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Technology Area */}

      {/* Feature Area */}
      <section className="feature-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contnet">
                <div className="feature-tittle">
                  <span>Features</span>
                  <h2>We Have Also Some Features That Provided by Paso</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt consectetur, beatae quod eaque reprehenderit non ab
                    quibusdam doloribus voluptatibus! Voluptatum aspernatur
                    quasi id dolore doloremque quo vero
                  </p>
                </div>
                <ul>
                  <li>
                    <i className="flaticon-correct" />
                    Freelancing Traning Course
                  </li>
                  <li>
                    <i className="flaticon-correct" />
                    Technological Consultation
                  </li>
                  <li>
                    <i className="flaticon-correct" />
                    Monthly Paid Workspace
                  </li>
                  <li>
                    <i className="flaticon-correct" />
                    IT Learning Institute
                  </li>
                  <li>
                    <i className="flaticon-correct" />
                    Digital Marketing
                  </li>
                </ul>
                <a href className="box-btn">
                  Lets Talk!
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-img">
              <img src="/svg/svg3.jpg" alt="company" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Area */}


    </>
  )
}

export default HomeAbout
