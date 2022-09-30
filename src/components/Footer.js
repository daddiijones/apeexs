import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer--> */}
      <footer className="footer bg-dark position-relative py-4 py-md-5">
        <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100 d-nonestyle"></div>
        <div className="dark-mode container position-relative zindex-2 pt-4 pt-md-2 pt-xl-4 pt-xxl-5">
          <div className="row py-md-3 mb-4 mb-md-5">
            <div className="col-md-7 col-lg-6 col-xxl-5 mb-sm-4 mb-md-0">
              <h2 className="display-4 mb-4 mb-md-5">
                Let's start building brand
              </h2>
              <div className="d-sm-flex align-items-center">
                <a
                  className="btn btn-lg btn-primary rounded-0 me-sm-3 me-lg-4"
                  href="#"
                >
                  Let's work together
                </a>
                <p className="fs-sm py-3 py-sm-0 ps-sm-2 mb-0">
                  Managers will contact you to discuss the project and select
                  the best team
                </p>
              </div>
            </div>
            <div className="col-md-5 offset-lg-1 offset-xxl-2 d-flex flex-column">
              <div className="nav mx-n2 mx-lg-n4 mb-2 mb-sm-3">
                <a
                  className="nav-link text-primary px-2 px-lg-4"
                  href="mailto:example@email.com"
                >
                  example@email.com
                </a>
                <a className="nav-link px-3 px-lg-4" href="#">
                  Privay policy
                </a>
              </div>
              <div className="nav flex-column mb-3 mb-sm-4">
                <a className="nav-link py-1 px-0" href="tel:+15262200444">
                  + 1 526 220 0444
                </a>
                <a className="nav-link py-1 px-0" href="tel:+15262200000">
                  + 1 526 220 0000
                </a>
              </div>
              <div className="nav mx-n2 mt-auto">
                <a className="nav-link py-1 px-2 me-2" href="#">
                  instagram
                </a>
                <a className="nav-link py-1 px-2 me-2" href="#">
                  behance
                </a>
                <a className="nav-link py-1 px-2 me-2" href="#">
                  medium
                </a>
                <a className="nav-link py-1 px-2" href="#">
                  dribbble
                </a>
              </div>
            </div>
          </div>
          <p className="fs-sm pt-3 pb-2 pb-lg-0 mb-0">
            <span className="opacity-70">
              &copy; 2022 Apeexs Hub{" "}
              <a href="" className="text-decoration-none">
                (1138631)
              </a>
              .{" "}
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
