import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footertop text-center text-lg-start text-white footer-pos" style={{backgroundColor: '#1c2331'}}>
        <section className="d-flex justify-content-between p-4 bg-primary" >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href className="text-white me-4">
              <i className="fa fa-facebook-f" />
            </a>
            <a href className="text-white me-4">
              <i className="fa fa-twitter" />
            </a>
            <a href className="text-white me-4">
              <i className="fa fa-instagram" />
            </a>
            <a href className="text-white me-4">
              <i className="fa fa-linkedin" />
            </a>
            <a href className="text-white me-4">
              <i className="fa fa-github" />
            </a>
          </div>
        </section>
        <section className>
          <div className="container text-center text-md-start">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Movie Booking Website</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p>
                  Movie Booking Website is Pune based website which is India's
                  largest online platform which allows users to book tickets for
                  movies.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p className="footertext">
                  <a href="#!" className="text-white">Home</a>
                </p>
                <p className="footertext">
                  <a href="#!" className="text-white">About Us</a>
                </p>
                <p className="footertext">
                  <a href="#!" className="text-white">Help</a>
                </p>
                <p className="footertext">
                  <a href="#!" className="text-white">Feedback</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p className="footertext">
                  <a href="#!" className="text-white">Your Profile</a>
                </p>
                <p className="footertext">
                  <a href="#!" className="text-white">Login</a>
                </p>
                <p className="footertext">
                  <a href="#!" className="text-white">Sign Up</a>
                </p>
                <p className="footertext">
                  <a href="#!" className="text-white">Logout</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                <p><i className="fa fa-home mr-3" />&nbsp; Hadapsar , Pune</p>
                <p>
                  <i className="fa fa-envelope mr-3" />&nbsp;
                  moviebooking@example.com
                </p>
                <p><i className="fa fa-phone mr-3" /> &nbsp;+ 01 234 567 88</p>
                <p><i className="fa fa-print mr-3" /> &nbsp;+ 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MovieBooking.com</a>
        </div>
        {/* Copyright */}
      </footer>

    </>
  );
}
