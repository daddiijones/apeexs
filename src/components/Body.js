import React from "react";

const Body = () => {
  return (
    <div>
      <section className="bg-faded-primary d-flex min-vh-100 overflow-hidden">
        <div className="container d-flex justify-content-center pb-sm-3 py-md-4">
          <div className="row align-items-center pt-5 mt-4 mt-xxl-0">
            <div className="col-lg-6  mt-4 text-lg-start">
              <span className="badge bg-faded-warning text-warning fs-sm mb-3">
                SAVE TIME AND YOUR RELATIONSHIP &nbsp; 🚀
              </span>
              <h1 className="display-8   pb-2 mb-2">
                <span>We do your </span> laundry for you.
              </h1>
              <p className="font-weight-bold pb-3 mb-4 ">
                At Apeexs, we pick up, clean, and return your laundry and dry
                cleaning right to your door. We’ll take better care of your
                clothes than you do.
              </p>
              <div className="row row-cols-3">
                <div className="col">
                  <i className="ai-wallet d-block fs-2 text-dark mb-3"></i>
                  <p className="mb-0">Fund wallet </p>
                </div>

                <div className="col">
                  <i className="ai-bulb-alt d-block fs-1 text-dark mb-2 pb-1"></i>
                  <p className="mb-0">Choose plan</p>
                </div>

                <div className="col">
                  <i className="ai-circle-check-filled d-block fs-3 text-dark mb-3"></i>
                  <p className="mb-0">We deliver</p>
                </div>
              </div>
              <div className="d-sm-flex justify-content-center justify-content-lg-start pt-5 mt-lg-2">
                <a
                  className="btn btn-lg btn-primary w-100 w-sm-auto mb-2 mb-sm-0 me-sm-1"
                  href="#"
                >
                  Schedule a Pickup Now!
                </a>
                <a className="btn btn-lg btn-link" href="#">
                  Become a Partner<i className="ai-arrow-right ms-2"></i>
                </a>
              </div>
            </div>

            {/* <!-- Video + Parallax--> */}
            <div className="col-lg-6 mb-4 mb-lg-0 pb-3 pb-lg-0">
              <div className="parallax mx-auto mx-lg-0 parallax-style">
                <div className="parallax-layer" data-depth="0.3">
                  <img
                    src="img/landing/marketing-agency/hero/shape01.svg"
                    alt="Background shape"
                  />
                </div>
                <div className="parallax-layer zindex-2" data-depth="-0.1">
                  <img
                    src="img/landing/marketing-agency/hero/shape02.svg"
                    alt="Background shape"
                  />
                </div>
                <div className="parallax-layer" data-depth="-0.15">
                  <img
                    src="img/landing/marketing-agency/hero/shape03.svg"
                    alt="Background shape"
                  />
                </div>
                <div className="parallax-layer zindex-2" data-depth="-0.25">
                  <img
                    src="img/landing/marketing-agency/hero/shape04.svg"
                    alt="Background shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services--> */}
      <section className="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <div className="row align-items-center py-1 py-sm-3 py-md-4 my-lg-2">
          <div className="col-lg-4 offset-xl-1">
            <h2 className="h1 text-center text-lg-start pb-3 pb-lg-1">
              Our servises
            </h2>
            {/* <!-- Show on screens > 992px--> */}
            <ul className="list-unstyled d-none d-lg-block pb-3 mb-3 mb-lg-4">
              <li className="d-flex pt-2">
                <i className="ai-check-alt fs-4 text-primary mt-n1 me-2"></i>
                We deliver before time
              </li>
              <li className="d-flex pt-2">
                <i className="ai-check-alt fs-4 text-primary mt-n1 me-2"></i>
                Enjoy your time while we do the hard work.              </li>
              <li className="d-flex pt-2">
                <i className="ai-check-alt fs-4 text-primary mt-n1 me-2"></i>
                We take good care of your cloths than you do.
              </li>
            </ul>
            <a className="btn btn-primary d-none d-lg-inline-flex" href="#">
              Schedule a Pickup
            </a>
          </div>
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col">
                <div className="card border-0 bg-faded-primary">
                  <div className="card-body">
                    <i className="ai-towel fs-1 text-primary d-block mb-3"></i>
                    <h3 className="h5">Dry Cleaning</h3>
                    <p className="fs-sm">
                    We do your laundry for you so you can enjoy your free time.
                    </p>
                  </div>
                </div>
                <div className="card border-0 bg-faded-info mt-4">
                  <div className="card-body">
                    <i className="ai-shower fs-1 text-info d-block mb-3"></i>
                    <h3 className="h5">Wash & Fold</h3>
                    <p className="fs-sm">
                    The ideal service if you want to avoid the dreaded laundry chore and save your time and your sanity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col pt-lg-3">
                <div className="card border-0 bg-faded-warning mt-4 mt-sm-0 mt-lg-4">
                  <div className="card-body">
                    <i className="ai-send fs-1 text-warning d-block mb-3"></i>
                    <h3 className="h5">Pick up & Delivery</h3>
                    <p className="fs-sm">
                    Whether it’s a week’s worth of the entire family’s clothes, or all your linens, we pick up, wash, and fold your laundry..
                    </p>
                  </div>
                </div>
                <div className="card border-0 bg-faded-danger mt-4">
                  <div className="card-body">
                    <i className="ai-home fs-2 text-danger d-block mb-3"></i>
                    <h3 className="h5">Demostic Cleaning</h3>
                    <p className="fs-sm">
                    We are proud of our home cleaning services and we are keen to provide an affordable service and ensuring the job is done to the highest quality. .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Show button on screens < 992px--> */}
            <div className="d-lg-none text-center pt-3 mt-3 mt-sm-4">
              <a className="btn btn-primary" href="#">
                See all servises
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About--> */}
      <section className="overflow-hidden pb-5 mb-lg-3 mb-xl-4 mb-xxl-5" >
        <div className="container pb-sm-2 pb-md-3 pb-lg-5 mb-md-3 mb-lg-0">
          {/* <!-- Parallax image--> */}
          <div className="position-relative mx-auto mxwp-className">
            <div
              className="position-relative zindex-3"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-offset="300"
            >
              <img
                src="img/landing/marketing-agency/about/01.png"
                alt="Image"
              />
            </div>
            <div
              className="position-absolute top-0 start-0 zindex-2"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-offset="300"
            >
              <img
                src="img/landing/marketing-agency/about/02.png"
                alt="Image"
              />
            </div>
            <div
              className="position-absolute top-0 start-0 zindex-4"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="300"
              data-aos-delay="900"
              data-aos-easing="ease-out-back"
            >
              <svg
                className="w-100 h-100 text-info"
                width="1198"
                height="693"
                viewBox="0 0 1198 693"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M579.362 65.02c1.689-.051 3.25-1.264 4.785-1.89l2.699-1.2 1.203-.587c-.051.026 1.446-.69.704-.613 3.147-.345 2.571-4.916-.589-4.303-.844.166-1.33.626-2.008 1.098-.909.638-1.907 1.2-2.879 1.711l-2.827 1.443c-.653.409-1.19 1.034-1.881 1.379-1.433.715-.729 3.013.793 2.962zm-27.74-8.747c1.56.357 3.428-.792 4.835-1.405.998-.434 1.945-.983 2.917-1.481.665-.332 1.484-.97 1.983-1.239 1.753-.907 1.036-4.163-1.062-3.907-1.126.14-1.471.587-2.239 1.302-.614.562-1.522 1.073-2.2 1.571l-4.452 3.397c-.678.421-.627 1.57.218 1.762zm22.666-6.037l.077.153c.217.472.908.868 1.433.817 1.356-.141 2.571-.919 3.812-1.481l3.505-1.711c2.546-.958 1.587-4.648-1.125-4.099-1.766.358-3.467 1.941-5.028 2.796-1.177.677-3.441 1.852-2.674 3.524zm29.078 9.805c1.65.69 3.761-.702 5.271-1.328 1.612-.664 3.224-1.073 4.541-2.273 1.766-1.622-1.01-4.38-2.622-2.618-.896.983-2.252 1.328-3.403 1.928l-4.056 2.273c-.882.536-.588 1.66.269 2.017zm7.491 14.504c2.533-1.073 4.555-3.103 6.909-4.469.87-.511.947-1.826.409-2.579-.627-.881-1.727-.907-2.584-.409-1.152.677-2.111 1.698-3.16 2.528-1.062.83-2.431 1.545-3.25 2.617-.857 1.136.269 2.911 1.676 2.311zm-8.731 22.483c2.265-2.464 4.683-4.801 6.909-7.278 2.188-2.439-1.829-5.516-3.544-2.732-.473.779-1.049 1.417-1.471 2.234-.499.945-1.088 1.813-1.715 2.682-.946 1.315-2.418 2.86-2.085 4.584.141.843 1.356 1.111 1.906.511zm-23.927 4.292c1.433-.307 2.814-1.673 3.723-2.771.985-1.187 2.226-2.171 2.904-3.588 1.164-2.439-2.917-4.15-3.877-1.622-.921 2.452-4.311 4.035-4.196 6.87.025.664.806 1.251 1.446 1.111zm-20.46 13.752c-.013.306.55-.588.691-.792.448-.651.832-1.341 1.215-2.018.819-1.468 1.856-2.758 2.726-4.188 1.292-2.094-2.252-4.073-3.263-1.902l-2.597 5.924c-.461 1.213-1.331 2.439-.384 3.64.55.702 1.574.063 1.612-.664zm-15.532-2.812c1.177-.306 2.06-2.209 2.636-3.167.46-.766.831-1.596 1.254-2.387.025-.039.806-1.711.192-.703.217-.357.665-.574.895-.995.665-1.213-.141-3.282-1.765-3.065-2.943.383-2.854 3.831-3.672 6.103-.192.524-1.485 4.725.46 4.214zm17.857-15.767c.243-.204.781-.332 1.1-.485.909-.447 1.728-1.047 2.521-1.647 1.407-1.047 2.981-2.158 4.107-3.499 1.458-1.737-.742-3.92-2.482-2.477-.806.664-1.472 1.507-2.188 2.26l-2.508 2.413c-.819.83-2.392 1.979-1.714 3.294.243.434.831.434 1.164.141zm-14.918-2.936c.602-1.149 1.024-2.273 1.408-3.524.32-1.047.921-1.915 1.228-2.937.448-1.456-1.292-2.771-2.584-1.979-1.433.881-1.484 2.503-1.459 4.022.038 1.392-.294 3.141.294 4.405.205.447.909.421 1.113.013zm57.587-50.408l5.194.306c2.034.051 4.081.741 5.718-.702.563-.498.563-1.545 0-2.056-1.714-1.52-4.35-.868-6.486-.6-1.535.191-3.646.026-5.028.83-1.061.638-.537 2.145.602 2.222zm26.732 4.633c-.409 1.29 1.408 1.839 2.329 2.017l6.946 1.468c2.431.702 3.39-3.345 1.011-3.677-2.072-.294-4.209-.358-6.294-.268-.934.038-2.584.472-3.454.153-.218-.077-.474.102-.538.306zm3.38 14.008c1.753.702 3.377 1.264 5.232 1.647 1.408.294 3.16.792 4.58.677 1.612-.128 2.597-2.03 1.356-3.281-1.356-1.366-3.377-.843-5.117-.932-1.829-.102-4.324-.613-6.064.064-.882.37-.882 1.481.013 1.826zm8.212 14.185c3.365 1.379 7.241.472 10.721 1.328 3.748.932 3.774-5.427 0-4.482-3.48.868-7.356-.051-10.721 1.328-.882.37-.895 1.456 0 1.826zm-50.489 29.84c-.716.038-1.023.319-1.561.766l-2.443 2.069c-1.305 1.187-2.239 2.464-3.288 3.856-1.203 1.583 1.074 3.435 2.584 2.579.755-.421.908-.894 1.267-1.622.409-.829 1.01-1.583 1.586-2.311.973-1.213 2.431-2.592 2.751-4.162.115-.562-.256-1.213-.896-1.175zm-17.324 10.214c-1.023.791-1.356 1.979-1.727 3.166-.575 1.839-.742 3.614-.857 5.542-.153 2.707 4.414 2.681 4.184 0-.154-1.839-.307-3.576-.167-5.414.077-.958.282-2.477-.575-3.18-.218-.178-.602-.306-.858-.114zm-22.837 9.935c-.448 1.341.422 3.052.716 4.379.307 1.354.64 2.746 1.369 3.933 1.894 3.103 6.282-.83 3.711-2.86-.857-.677-1.28-1.507-1.74-2.477l-.806-1.698c-.295-.575-.781-1.009-1.088-1.558-.512-.919-1.842-.651-2.162.281zM531.155 95.51c.806-1.009 1.561-1.954 2.098-3.141l1.689-4.175c1.177-2.911-3.864-4.443-4.811-1.328l-1.139 4.226c-.345 1.251-1.215 2.273-.793 3.626.371 1.162 2.073 1.89 2.956.792zm8.903-21.707c.78-.868 1.74-1.558 2.482-2.477.716-.881 1.369-2.081 2.239-2.809 2.303-1.941-1.165-5.516-3.34-3.333-.524.536-.831 1.111-1.202 1.749-.41.715-.96 1.354-1.357 2.069-.742 1.366-1.573 2.567-1.189 4.188.23.996 1.663 1.392 2.367.613zm42.435 8.175c1.791-.473 3.621-1.456 5.092-2.567 1.279-.97 3.083-1.941 3.991-3.294 1.331-1.979-1.906-3.869-3.211-1.877-.179.281-.831.562-1.113.779l-2.494 2.005c-1.241.945-3.02 1.532-3.787 2.962-.55 1.034.345 2.311 1.522 1.992zm-23.063-3.834c.32-.523.934-.83 1.369-1.251.499-.472.883-1.047 1.318-1.583.959-1.149 2.239-1.979 3.198-3.116 1.548-1.839-.78-4.15-2.622-2.618-1.421 1.175-2.598 2.924-3.493 4.52-.653 1.162-1.971 2.707-1.293 4.048.32.6 1.203.536 1.523 0zm62.284 2.389c1.138.217 2.2.064 3.313-.204 1.152-.268 2.342-.255 3.506-.46 2.239-.383 1.241-4.175-.947-3.422-.921.319-1.906.434-2.815.779-.895.332-1.804.983-2.75 1.098-1.139.153-1.664 1.954-.307 2.209zm36.932-17.275c.256 2.017 2.431 2.796 4.069 3.601l1.765.868c-.102-.051.704.434.512.281-.397-.294.767.728.908.805 1.318.702 3.019.102 3.429-1.392l.038-.141c.217-.779.026-1.826-.627-2.375-1.087-.919-2.264-1.124-3.62-1.341-1.689-.281-3.301-.868-4.887-1.507-.704-.281-1.676.447-1.587 1.2zm-125.755 53.139c-.09 1.673.601 3.626 1.164 5.184.614 1.698 1.766 3.486 3.813 3.077.998-.204 1.407-1.289 1.241-2.183-.141-.766-.614-1.047-1.062-1.596-.32-.396-.563-.932-.806-1.379l-.909-1.698c-.409-.754-.882-1.29-1.356-1.967-.64-.906-2.034-.574-2.085.562z"></path>
              </svg>
            </div>
            <div
              className="position-absolute top-0 start-0"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-offset="300"
              data-aos-delay="600"
              data-aos-easing="ease-out-back"
            >
              <svg
                className="w-100 h-100 text-warning"
                width="1198"
                height="693"
                viewBox="0 0 1198 693"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M828.762 131.524c-38.952 16.753-134.813 136.894-54.172 163.269 29.536 9.657 62.546 1.819 92.465 13.085 33.408 12.588 60.283 32.772 97.566 29.519 31.269-2.729 42.409-28.44 45.229-56.387 2.93-29.041 12.95-35.606 31.06-57.194 14.93-17.793 25.09-41.532 6.11-59.579-20.29-19.286-53.376-9.385-78.904-10.343-17.496-.656-35.976-2.91-50.929-11.198-8.325-4.62-17.067-11.049-26.502-13.973-19.456-5.976-44.603-4.649-61.923 2.801z"></path>
              </svg>
            </div>
          </div>
          {/* <!-- Content--> */}
          <div className="row pt-5 mt-md-4" id="about">
            <div className="col-md-6 col-xxl-5 offset-xxl-1 mb-4 mb-md-0">
              <div className="text-center text-md-start pe-md-4 pe-xl-5 pe-xxl-0">
                <h2 className="h1 mb-sm-4">
                  A team of specialists works for your business
                </h2>
                <p className="fs-lg mb-2 mb-sm-3 mb-xl-4 mx-auto mx-md-0 mxwfs-className">
                  Sapien ultrices egestas at faucibus on diam velit diam amet
                  nibh in quam rutrum diam natoque scelerisque viverra pharetra
                  quis massa maecenas vulputate.
                </p>
                <a className="btn btn-lg btn-link px-0" href="#">
                  More about us<i className="ai-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 mt-n3">
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-2 row-cols-lg-3 gy-md-2 gx-3">
                <div className="col">
                  <div className="ratio ratio-21x9 position-relative mx-auto mxw-className">
                    <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 px-3">
                      <img
                        className="d-block d-dark-mode-none"
                        src="img/landing/saas-1/brands/klinos-gray.svg"
                        width="120"
                        alt="Klinos"
                      />
                      <img
                        className="d-none d-dark-mode-block"
                        src="img/landing/saas-1/brands/klinos-light.svg"
                        width="120"
                        alt="Klinos"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ratio ratio-21x9 position-relative mx-auto mxw-className">
                    <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 px-3">
                      <img
                        className="d-block d-dark-mode-none"
                        src="img/landing/saas-1/brands/starcraft-gray.svg"
                        width="147"
                        alt="Starcraft"
                      />
                      <img
                        className="d-none d-dark-mode-block"
                        src="img/landing/saas-1/brands/starcraft-light.svg"
                        width="147"
                        alt="Starcraft"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ratio ratio-21x9 position-relative mx-auto mxw-className">
                    <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 px-3">
                      <img
                        className="d-block d-dark-mode-none"
                        src="img/landing/saas-1/brands/airbnb-gray.svg"
                        width="121"
                        alt="Airbnb"
                      />
                      <img
                        className="d-none d-dark-mode-block"
                        src="img/landing/saas-1/brands/airbnb-light.svg"
                        width="121"
                        alt="Airbnb"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ratio ratio-21x9 position-relative mx-auto mxw-className">
                    <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 px-3">
                      <img
                        className="d-block d-dark-mode-none"
                        src="img/landing/saas-1/brands/alpine-gray.svg"
                        width="132"
                        alt="Alpine"
                      />
                      <img
                        className="d-none d-dark-mode-block"
                        src="img/landing/saas-1/brands/alpine-light.svg"
                        width="132"
                        alt="Alpine"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ratio ratio-21x9 position-relative mx-auto mxw-className">
                    <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 px-3">
                      <img
                        className="d-block d-dark-mode-none"
                        src="img/landing/saas-1/brands/foster-gray.svg"
                        width="132"
                        alt="Foster"
                      />
                      <img
                        className="d-none d-dark-mode-block"
                        src="img/landing/saas-1/brands/foster-light.svg"
                        width="132"
                        alt="Foster"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ratio ratio-21x9 position-relative mx-auto mxw-className">
                    <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 px-3">
                      <img
                        className="d-block d-dark-mode-none"
                        src="img/landing/saas-1/brands/champion-gray.svg"
                        width="130"
                        alt="Champion"
                      />
                      <img
                        className="d-none d-dark-mode-block"
                        src="img/landing/saas-1/brands/champion-light.svg"
                        width="130"
                        alt="Champion"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ratio ratio-21x9 position-relative mx-auto mxw-className">
                    <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 px-3">
                      <img
                        className="d-block d-dark-mode-none"
                        src="img/landing/saas-1/brands/starcraft-gray.svg"
                        width="147"
                        alt="Starcraft"
                      />
                      <img
                        className="d-none d-dark-mode-block"
                        src="img/landing/saas-1/brands/starcraft-light.svg"
                        width="147"
                        alt="Starcraft"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ratio ratio-21x9 position-relative mx-auto mxw-className">
                    <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 px-3">
                      <img
                        className="d-block d-dark-mode-none"
                        src="img/landing/saas-1/brands/klinos-gray.svg"
                        width="120"
                        alt="Klinos"
                      />
                      <img
                        className="d-none d-dark-mode-block"
                        src="img/landing/saas-1/brands/klinos-light.svg"
                        width="120"
                        alt="Klinos"
                      />
                    </div>
                  </div>
                </div>
                <div className="col d-none d-sm-block d-md-none d-lg-block">
                  <div className="ratio ratio-21x9 position-relative mx-auto mxw-className">
                    <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 px-3">
                      <img
                        className="d-block d-dark-mode-none"
                        src="img/landing/saas-1/brands/alpine-gray.svg"
                        width="132"
                        alt="Alpine"
                      />
                      <img
                        className="d-none d-dark-mode-block"
                        src="img/landing/saas-1/brands/alpine-light.svg"
                        width="132"
                        alt="Alpine"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Reviews--> */}
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <h2 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pb-sm-2 pb-lg-3 mt-lg-2 mx-auto reviewstyle">Customers have consistently rated Apeexs 4.7/5 stars</h2>
        
          <div className="swiper-wrapper">
            {/* <!-- Item--> */}
            <div className="swiper">
              <div className="text-center p-3 p-sm-4 m-lg-2">
                <div className="d-flex justify-content-center fs-lg mb-4"><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i></div>
                <p className="mb-3">“Around provides us with the detailed and accurate data we need.”</p><img class="d-inline-block d-dark-mode-none" src="img/landing/saas-1/brands/clutch-dark.svg" width="196" alt="Clutch" /><img class="d-none d-dark-mode-inline-block" src="img/landing/saas-1/brands/clutch-light.svg" width="196" alt="Clutch" />
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="swiper">
              <div className="text-center p-3 p-sm-4 m-lg-2">
                <div className="d-flex justify-content-center fs-lg mb-4"><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i></div>
                <p className="mb-3">“Tools are constantly improved and contain a lot of useful information.”</p><img class="d-inline-block" src="img/landing/saas-1/brands/product-hunt.svg" width="196" alt="Product Hunt" />
              </div>
            </div>
            
            {/* <!-- Item--> */}
            <div className="swiper">
              <div className="text-center p-3 p-sm-4 m-lg-2">
                <div className="d-flex justify-content-center fs-lg mb-4"><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-warning mx-2"></i><i class="ai-star-filled text-muted opacity-40 mx-2"></i></div>
                <p className="mb-3">"We can easily analyze our big data quickly and efficiently all the time."</p><img class="d-inline-block" src="img/landing/saas-1/brands/capterra.svg" width="196" alt="Capterra" />
              </div>
            </div>
          </div>
          {/* <!-- Pagination (bullets)--> */}
          <div className="swiper-pagination position-relative bottom-0 d-lg-none"></div>
      </section>
      {/* <!-- Features grid--> */}

      {/* <!-- Pricing plans--> */}
      <section className="container py-5 mt-5 mb-lg-3 mb-xl-4 mb-xxl-5">
        {/* <!-- Page title--> */}
        <div className="text-center pb-3 pt-lg-2 pt-xl-4 my-1 my-sm-3 my-lg-4">
          <h1 className="display-2">Pricing plans</h1>
          <p className="fs-lg mb-0">
            Select a service plan that best suits your business needs
          </p>
        </div>
        {/* <!-- Plans--> */}
        <div className="row row-cols-3 flex-nowrap pb-4 overflow-auto">
          {/* <!-- Plan--> */}
          <div className="col mxw-class-col">
            <div className="card h-100 py-lg-4">
              <div className="card-body w-100 mx-auto text-center mxw-class-card-body">
                <h3>Light</h3>
                <div className="display-6 text-primary">₦6,500</div>
                <div className="mb-4">15 Days</div>
                <p className="mb-4 pb-4">
                  Phasellus in hendrerit interdum lorem proin pretium dictum
                  urna
                </p>
                <button className="btn btn-primary w-100" type="button">
                  Get this plan now
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Plan--> */}
          <div className="col mxw-class-col">
            <div className="card border-primary bg-primary h-100 py-lg-4">
              <div className="card-body w-100 mx-auto text-center mxw-class-card-body">
                <h3 className="text-light">Premium</h3>
                <div className="display-6 text-light">₦150,000</div>
                <div className="text-light opacity-70 mb-4">Per Year</div>
                <p className="text-light opacity-70 mb-4 pb-4">
                  Morbi et massa fames ac scelerisque sit commodo dignissim
                  aucibus
                </p>
                <button className="btn btn-light w-100" type="button">
                  Get this plan now
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Plan--> */}
          <div className="col mxw-class-col">
            <div className="card h-100 py-lg-4">
              <div className="card-body w-100 mx-auto text-center  mxw-class-card-body">
                <h3>Medium</h3>
                <div className="display-6 text-primary">₦12,500</div>
                <div className="mb-4">Per Month</div>
                <p className="mb-4 pb-4">
                  Enim aenean phasellus in hendrerit interdum lorem proin
                  pretium
                </p>
                <button className="btn btn-primary w-100" type="button">
                  Get this plan now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Comparison table--> */}
        <div className="text-center pt-md-1 pt-lg-2">
          <button
            className="btn btn-more btn-link fs-4"
            type="button"
            data-show-label="Compare plans"
            data-hide-label="Compare plans"
            data-bs-toggle="collapse"
            data-bs-target="#comparePlans"
          ></button>
        </div>
        <div className="collapse show" id="comparePlans">
          <div className="table-responsive pt-sm-2 pt-lg-3">
            <table className="table text-center text-nowrap">
              <thead>
                <tr>
                  <th className="border-0 py-3">&nbsp;</th>
                  <th className="border-0 py-3">
                    <span className="h5 mb-0">Light</span>
                  </th>
                  <th className="border-0 py-3">
                    <span className="h5 mb-0">Premium</span>
                  </th>
                  <th className="border-0 py-3">
                    <span className="h5 mb-0">Medium</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Billed monthly</span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">$18</span>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">$72</span>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <span className="text-dark">$36</span>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Members
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <span className="text-dark">Just you</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">Unlimited</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">3 members</span>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Guest access
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">Just you</span>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">Unlimited</span>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <span className="text-dark">3 members</span>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      File uploads
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <span className="text-dark">2 GB</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">30 GB</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">10 GB</span>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start pt-4 pb-3 ps-4">
                    <div className="h5 pt-1 mb-0">Collaboration</div>
                  </th>
                  <th className="border-0 py-3">&nbsp;</th>
                  <th className="border-0 py-3">&nbsp;</th>
                  <th className="border-0 py-3">&nbsp;</th>
                </tr>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">
                      Real-time collaboration
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Link sharing
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Collaborative workspace
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Filter views
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <span className="text-dark">3</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">Unlimited</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">12</span>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Teams
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start pt-4 pb-3 ps-4">
                    <div className="h5 pt-3 mb-0">Features</div>
                  </th>
                  <th className="border-0 py-3">&nbsp;</th>
                  <th className="border-0 py-3">&nbsp;</th>
                  <th className="border-0 py-3">&nbsp;</th>
                </tr>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">
                      Web, desktop, &amp; mobile apps
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Reminders
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Priorities</span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Comments
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Integrations</span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">5</span>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">Unlimited</span>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <span className="text-dark">15</span>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start pt-4 pb-3 ps-4">
                    <div className="h5 pt-3 mb-0">Admin &amp; security</div>
                  </th>
                  <th className="border-0 py-3">&nbsp;</th>
                  <th className="border-0 py-3">&nbsp;</th>
                  <th className="border-0 py-3">&nbsp;</th>
                </tr>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Admin &amp; member roles
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Team billing</span>
                  </th>
                  <td className="border-0 py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <th className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Priority support
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      ></i>
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success"></i>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger"></i>
                  </td>
                </tr>
                <tr>
                  <td className="border-0 pt-4">&nbsp;</td>
                  <td className="border-0 pt-4">
                    <button
                      className="btn btn-outline-primary mt-3"
                      type="button"
                    >
                      Get started $18
                    </button>
                  </td>
                  <td className="border-0 pt-4">
                    <button
                      className="btn btn-outline-primary mt-3"
                      type="button"
                    >
                      Get started $72
                    </button>
                  </td>
                  <td className="border-0 pt-4">
                    <button
                      className="btn btn-outline-primary mt-3"
                      type="button"
                    >
                      Get started $36
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>






    </div>
  );
};

export default Body;
