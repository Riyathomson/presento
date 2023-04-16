import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>


<header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">Presento<span>.</span></a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""></a>*/}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="/">Home</a></li>
          <li><a className="nav-link scrollto" href="/about">About</a></li>
          <li><a className="nav-link scrollto" href="/services">Services</a></li>
          <li><a className="nav-link scrollto " href="/portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="/team">Team</a></li>
          <li><a href="/blog">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
            <ul>
              <li className="dropdown"><a href="/portfolio"><span>Riya</span><i className="bi bi-chevron-right" /></a>
              <ul>
                  <li><a href="/team">aleena</a></li>
                  <li><a href="/Services">Rohit</a></li>
                  <li><a href="/about">rahul</a></li>
                  <li><a href="#">amrita</a></li>
                  <li><a href="#">lakshmi</a></li>
                </ul>
              
              
              </li>
              <li className="dropdown"><a href="#"><span>Nitya</span> <i className="bi bi-chevron-right" /></a>
                <ul>
                  <li><a href="/team">Anu</a></li>
                  <li><a href="/Services">Deep Drop Down 2</a></li>
                  <li><a href="/about">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/contact">Revathy</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
      <a href="#about" className="get-started-btn scrollto">Get Started</a>
    </div>
  </header>


  
            </div>
        );
    }
}

export default Header;