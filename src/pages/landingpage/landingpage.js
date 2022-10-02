import React, { useEffect } from "react";
import "./landingpage.css";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Landing Page";
  }, []);

  return (
    <div>
      {/*Navbar*/}
      <nav className="navbar navbar-light bg-light">
        <div class="container-fluid py-2 navbarr">
          <a class="navbar-brand" href="/">
            <img src={require("../assets/logo2.png")} alt="logo" />
          </a>
          <ul class="navbar-nav nav-items">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                News
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/*Navbar end*/}

      {/*Banner*/}
      <div className="image">
        <div className="d-flex">
          <div className="text-holder d-flex flex-column" data-aos="fade-right">
            <h1>GSV Lead Hunter</h1>
            <h4>Online tool for searching businesses without 360 photo</h4>
            <button className="btn">
              <a href="/">Try Now</a>
            </button>
          </div>
          <div className="image-holder">
            <img
              src={require("../assets/banner-image.png")}
              alt="banner_image"
              data-aos="zoom-in"
            />
          </div>
        </div>

        {/*Banner Buttons*/}
        <div className="hero-button-list">
          <a className="btn" href="#section1" data-aos="zoom-in-up">
            Search by city
          </a>
          <a className="btn" href="#section2" data-aos="zoom-in-up">
            Search by categories
          </a>
          <a className="btn" href="#section4" data-aos="zoom-in-up">
            Filter without 360 photo
          </a>
          <a className="btn" href="#aboutus" data-aos="zoom-in-up">
            About Us
          </a>
        </div>
      </div>
      {/*Banner end*/}

      {/*Sections*/}
      <section className="main-section">
        {/*Section 1*/}
        <section className="container-fluied row section" id="section1">
          <div className="left-box col-lg-6">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <img
                src={require("../assets/banner-image.png")}
                alt="img"
                data-aos="fade-right"
              />
            </div>
          </div>
          <div className="right-box px-4 col-lg-6">
            <div class="col-lg-8 ml-auto " data-aos="fade-up">
              <h1 class="mb-4 section-heading">Search leads in your city</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                officia quas, modi sit eligendi numquam!
              </p>
              <ul class="list-check list-unstyled mb-5">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Unde doloremque</li>
              </ul>
              <p>
                <a href="/" class="btn">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </section>
        {/*Section 1 end*/}

        {/*Section 2*/}
        <section className="container-fluied row section" id="section2">
          <div className="left-box col-lg-6">
            <div
              class="col-lg-9 ml-auto"
              data-aos="fade-up"
              style={{ paddingLeft: "100px" }}
            >
              <h1 class="mb-4 section-heading">Search leads by categories</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                officia quas, modi sit eligendi numquam!
              </p>
              <ul class="list-check list-unstyled mb-5">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Unde doloremque</li>
              </ul>
              <p>
                <a href="/" class="btn">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="right-box col-lg-6">
            <img
              src={require("../assets/banner-image.png")}
              alt="img"
              data-aos="fade-left"
            />
          </div>
        </section>
        {/*Section 2 end*/}

        {/*Section 3*/}
        <section className=" mid-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="pricingTable">
                <div className="pricingTable-header">
                  <i className="fa fa-adjust" />
                  <div className="price-value"> $10.00 <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Standard</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>50GB</b> Disk Space</li>
                    <li><b>50</b> Email Accounts</li>
                    <li><b>50GB</b> Monthly Bandwidth</li>
                    <li><b>10</b> subdomains</li>
                    <li><b>15</b> Domains</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">try now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="pricingTable green">
                <div className="pricingTable-header">
                  <i className="fa fa-briefcase" />
                  <div className="price-value"> $20.00 <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Expert</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>60GB</b> Disk Space</li>
                    <li><b>60</b> Email Accounts</li>
                    <li><b>60GB</b> Monthly Bandwidth</li>
                    <li><b>15</b> subdomains</li>
                    <li><b>20</b> Domains</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">try now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="pricingTable blue">
                <div className="pricingTable-header">
                  <i className="fa fa-diamond" />
                  <div className="price-value"> $30.00 <span className="month">per month</span> </div>
                </div>
                <h3 className="heading">Premium</h3>
                <div className="pricing-content">
                  <ul>
                    <li><b>70GB</b> Disk Space</li>
                    <li><b>70</b> Email Accounts</li>
                    <li><b>70GB</b> Monthly Bandwidth</li>
                    <li><b>20</b> subdomains</li>
                    <li><b>25</b> Domains</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">try now</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
        {/*Section 3 end*/}

        {/*Section 4*/}
        <section className="container-fluied row section" id="section4">
          <div className="left-box col-lg-6">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <img
                src={require("../assets/banner-image.png")}
                alt="img"
                data-aos="fade-right"
              />
            </div>
          </div>
          <div className="right-box px-4 col-lg-6">
            <div class="col-lg-8 ml-auto " data-aos="fade-up">
              <h1 class="mb-4 section-heading">
                Filter leads without 360 photo
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                officia quas, modi sit eligendi numquam!
              </p>
              <ul class="list-check list-unstyled mb-5">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Unde doloremque</li>
              </ul>
              <p>
                <a href="/" class="btn">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </section>
        {/*Section 4 end*/}
      </section>
      {/*Sections end*/}

      {/*About Us*/}
      <div className="container-fliued about-us flex-column" id="aboutus">
        <img
          src={require("../assets/about.png")}
          alt="img"
          data-aos="zoom-in"
        />
        <h1 data-aos="fade-up">About Us</h1>
        <p data-aos="fade-up">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      {/*About Us end*/}

      {/*Footer*/}
      <footer class="main-footer">
        <div class="container py-5">
          <div class="row py-4">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img
                src={require("../assets/logo2.jpg")}
                alt=""
                width="180"
                class="mb-3"
              />
              <p class="font-italic text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item">
                  <a href="/" target="_blank" title="twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="/" target="_blank" title="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="/" target="_blank" title="instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="/" target="_blank" title="pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="/" target="_blank" title="vimeo">
                    <i class="fa fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Shop</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="/" class="text-secondary">
                    Link 1
                  </a>
                </li>
                <li class="mb-2">
                  <a href="/" class="text-secondary">
                    Link 2
                  </a>
                </li>
                <li class="mb-2">
                  <a href="/" class="text-secondary">
                    Link 3
                  </a>
                </li>
                <li class="mb-2">
                  <a href="/" class="text-secondary">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="/" class="text-secondary">
                    Login
                  </a>
                </li>
                <li class="mb-2">
                  <a href="/" class="text-secondary">
                    Register
                  </a>
                </li>
                <li class="mb-2">
                  <a href="/" class="text-secondary">
                    Wishlist
                  </a>
                </li>
                <li class="mb-2">
                  <a href="/" class="text-secondary">
                    Our Products
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-lg-0">
              <h6 class="text-secondary text-uppercase font-weight-bold mb-4">
                Newsletter
              </h6>
              <p class="text-secondary mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                itaque temporibus.
              </p>
              <div class="p-1 rounded border">
                <div class="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    class="form-control border-0 shadow-0"
                  />
                  <div class="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      class="btn btn-link"
                    >
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom py-4">
          <div class="container text-center">
            <p class="text-secondary mb-0 py-2">
              © 2019 Bootstrapious All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/*Footer end*/}
    </div>
  );
};

export default LandingPage;

/* <div>
        <div class="container center animate-opacity">
          <h1>Animation is Fun!</h1>
          <p>The w3-animate-top class slides in an element from the top.</p>
        </div>
      </div> */
