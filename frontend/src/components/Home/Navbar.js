import React from "react";
// import Login from "../../pages/Login";

export default function Navbar() {
  const MobileToggle = () => {
    var mobileTogggle = document.getElementById("mobileTogl");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-mobile");
    mobileTogggle.classList.toggle("bi-list");
    mobileTogggle.classList.toggle("bi-x");
  };

  const HideNavbar = () => {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("navbar-mobile")) {
      navbar.classList.remove("navbar-mobile");
      var mobileTogggle = document.getElementById("mobileTogl");
      mobileTogggle.classList.toggle("bi-list");
      mobileTogggle.classList.toggle("bi-x");
    }
  };

  const DropDownAct = (e) => {
    var navbar = document.getElementById("navbar");
    var a = document.getElementById("dropdownA");
    if (navbar.classList.contains("navbar-mobile")) {
      e.preventDefault();
      a.nextElementSibling.classList.toggle("dropdown-active");
    }
  };
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="/">
              PICT Campus Placement System<span></span>
            </a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="#hero"
                >
                  <i className="bi bi-house"></i>Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="#about"
                >
                  <i className="bi bi-info-circle"></i> About
                </a>
              </li>
              {/* <li><a className="nav-link scrollto" onClick={HideNavbar} href="#services"><i className="bi bi-eye"></i>Views</a></li> */}
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="#faq"
                >
                  <i className="bi bi-question-circle"></i>FAQs
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="/auth"
                >
                  <i className="bi bi-question-circle"></i>Login/Signup
                </a>
              </li>
             
             
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              id="mobileTogl"
              onClick={MobileToggle}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}
