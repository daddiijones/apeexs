import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className="navbar navbar-expand-lg fixed-top ">
        <div className="container">
          <Link className="navbar-brand pe-sm-3" to="">
            <span className="text-primary flex-shrink-0 me-2">
              <svg
                version="1.1"
                width="35"
                height="32"
                viewBox="0 0 36 33"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                ></path>
              </svg>
            </span>
            Apeexs
          </Link>
         
          <Link
            className=" text-decoration-none font-weight-bold order-lg-3 d-none d-sm-inline-flex p-3 "
            to=""
            rel="noopener"
          >
            Login
          </Link>
          <Link
            className="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex"
            href="account-signup.html"
            rel="noopener"
          >
            <i className="ai-user fs-xl me-2 ms-n1"></i>Create free account
          </Link>
          <button
            className="navbar-toggler ms-sm-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-nav-scroll me-auto arscrollHeight">

              <li className="nav-item dropdown">
                <Link className="nav-link" href="#about">
                Why Apeexs
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" href="#">
                  Customers
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" href="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" href="#">
                  Contact
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link to="/faq" className="nav-link" >Faq</Link>
                  
              </li>
              {/* <li className="nav-item dropdown"><a className="nav-link dropdown-toggle badge bg-faded-primary text-primary fs-sm"     href="#" data-bs-toggle="dropdown"
                data-bs-auto-close="outside" aria-expanded="false">Account</a>
              <ul className="dropdown-menu">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"
                    aria-expanded="false">Auth pages</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="account-signin.html">Sign In</a></li>
                    <li><a className="dropdown-item" href="account-signup.html">Sign Up</a></li>
                    <li><a className="dropdown-item" href="account-signinup.html">Sign In / Up</a></li>
                    <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="account-overview.html">Overview</a></li>
                <li><a className="dropdown-item" href="account-settings.html">Settings</a></li>
                <li><a className="dropdown-item" href="account-billing.html">Billing</a></li>
                <li><a className="dropdown-item" href="account-orders.html">Orders</a></li>
                <li><a className="dropdown-item" href="account-earnings.html">Earnings</a></li>
                <li><a className="dropdown-item" href="account-chat.html">Chat (Messages)</a></li>
                <li><a className="dropdown-item" href="account-favorites.html">Favorites (Wishlist)</a></li>
              </ul>
            </li> */}
            </ul>
            <div className="d-sm-none p-3 mt-n3">
              <Link
                className="btn btn-light w-100  mb-1"
                href="account-signin.html"
              >
                Login
              </Link>

              <Link
                className="btn btn-primary w-100  mb-1"
                href="account-signup.html"
                rel="noopener"
              >
                <i className="ai-user fs-xl me-2 ms-n1"></i>Create free account
                
              </Link>
            </div>
          </nav>
        </div>
        
      </header>
      
  );
};

export default Header;
