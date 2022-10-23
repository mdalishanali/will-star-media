import React from 'react'
import "./style.css"
import shape16 from '../../assets/img/shape16.png'
const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <a href="#" className="logo">
                <img
                  src="https://willstarmedia.com/assets/site/img/logo.png"
                  style={{ width: "50%" }}
                  alt="logo"
                />
              </a>
              <p>
                We have people with expertise and experince in this industry who can
                help you for your growth. We collaborate with YouTubers and social
                media influencers having huge fan following to{" "}
                <a
                  href="#"
                  style={{ color: "white" }}
                >
                  Read More.
                </a>
              </p>
              <ul className="social-link">
                <li>
                  <a
                    href="#"
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="popup_save"
                    rev="add_brand"
                    data-title="I'm A Brand"
                  >
                    Brands
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="popup_save"
                    rev="add_influencer"
                    data-title="I'm An Influencer"
                  >
                    Influencer
                  </a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-2">
              <h3>Resources</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                  >
                    Podcast
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map" />
                  48, CDC, B201, Riddhi Siddhi Akruti, Chinchwad, Pune - 411019
                </li>
                <li>
                  <i className="bx bx-envelope" />
                  brand@willstarmedia.com
                  <br />
                  Influencer@willStarmedia.com
                </li>
                <li>
                  <i className="bx bxs-inbox" />
                  <a href="#">willstarmedia.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                <i className="bx bx-copyright" />
                2022 <strong /> Developed by{" "}
                <a target="_blank" href="#">
                  Dm
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="shape16">
        <img
          src={shape16}
          alt="image"
        />
      </div>
    </footer>

  )
}

export default Footer