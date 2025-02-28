import React from 'react'

const Footer = () => {
  return (
    <>

<footer className="footer-area pt-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="content">
          <div className="logo">
            <a href="index.html"><img src="/assets/images/logo2.png" alt="logo" /></a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod.
          </p>
          <div className="subscribe">
            <h4>Join Newsletter</h4>
            <form className="newsletter-form" data-toggle="validator">
              <input type="email" id="emails" className="form-control" placeholder="Your Email" name="EMAIL" required autoComplete="off" />
              <button className="box-btn" type="submit">
                Subscribe
              </button>
              <div id="validator-newsletter" className="form-result" />
            </form>
          </div>
          <ul className="social">
            <li>
              <a href="https://www.facebook.com/" target="_blank"><i className="bx bxl-facebook" /></a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank"><i className="bx bxl-twitter" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank"><i className="bx bxl-instagram" /></a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" target="_blank"><i className="bx bxl-pinterest" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="content ml-15">
          <h3>Our Service</h3>
          <ul className="footer-list">
            <li><a href="solutions.html">Visual Design</a></li>
            <li><a href="solutions.html"> Development</a></li>
            <li><a href="solutions.html">QA &amp; Testing</a></li>
            <li><a href="solutions.html">IT Management</a></li>
            <li><a href="solutions.html">Cyber Security</a></li>
            <li><a href="solutions.html">Wireless Connection</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="content">
          <h3>Quick Links</h3>
          <ul className="footer-list">
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="solutions.html">Service</a></li>
            <li><a href="solutions.html">Career</a></li>
            <li><a href="privecy.html">Privacy &amp; Policy</a></li>
            <li><a href="terms-condition.html">Terms &amp; Conditions</a></li>
            <li><a href="solutions.html">Data Analysis</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="content contacts">
          <h3 className="ml-40">Contact</h3>
          <ul className="footer-list foot-social">
            <li><a href="tel:+1123456789"><i className="bx bx-mobile-alt" /> +1 123 456 789</a></li>
            <li><a href="tel:+1975456789"><i className="bx bx-phone" /> +1 975 456 789</a></li>
            <li><a href="mailto:hello@paso.com"><i className="bx bxs-envelope" /> hello@paso.com</a></li>
            <li><a href="mailto:support@paso.com"><i className="bx bxs-envelope" /> support@paso.com</a></li>
            <li><i className="bx bxs-map" /> 28/A street, New York, USA</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="copy-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <ul className="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="solutions.html">Solutions</a></li>
            <li><a href="case.html">Case Studies</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-6">
          <p>© Paso is Proudly Owned by <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
