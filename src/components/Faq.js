
import React from "react";

const Faq = () => {
  return (
    <div>
      {/* <!-- FAQ (Accordion)--> */}
      <section className="bg-secondary py-5">
        <div className="container py-md-2 py-lg-3 py-xl-5 my-2 my-sm-3 my-md-4 my-xxl-5">
          <div className="row">
            <div className="col-md-4 text-center text-md-start">
              <h2 className="h1">Any questions? Check out the FAQ</h2>
              <p className="pb-3 pb-sm-4">
                Et felis vitae ac venenatis lacus cras etiam risus scelerisque
                auctor adipiscing in a porta
              </p>
              <div className="d-none d-md-flex justify-content-center">
                <svg
                  className="text-warning ms-n4"
                  width="200"
                  height="211"
                  viewBox="0 0 200 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="col-md-8 col-lg-7 offset-lg-1">
              <div className="accordion" id="faq">
                <div className="accordion-item bg-light">
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionOne"
                      aria-expanded="true"
                      aria-controls="questionOne"
                    >
                      Is there a free trial?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse show"
                    id="questionOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq"
                  >
                    <div className="accordion-body fs-sm">
                      Adipiscing sagittis neque egestas id platea accumsan.
                      Morbi inpa platea urna curabitur habitant pulvinar lacinia
                      neque. Netus gravida amet, aliquam quam turpis aliquet
                      cras. Find aute irure dolor in reprehenderit voluptate
                      velit esse cillum dolore eu nulla pariatur. Sit amet,
                      adipiscing elit.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-light">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionTwo"
                      aria-expanded="false"
                      aria-controls="questionTwo"
                    >
                      How do refunds work?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="questionTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faq"
                  >
                    <div className="accordion-body fs-sm">
                      Quisque rutrum sit amet magna sit amet tristique. Vivamus
                      rhoncus ac purus vitae convallis. Aliquam erat volutpat.
                      Proin egestas, mauris ut semper semper, ipsum felis mattis
                      ligula, et porttitor ante arcu nec ante. Aliquam congue
                      est eu turpis sollicitudin, et ullamcorper tortor aliquam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-light">
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionThree"
                      aria-expanded="false"
                      aria-controls="questionThree"
                    >
                      Do you offer student discounts?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="questionThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faq"
                  >
                    <div className="accordion-body fs-sm">
                      Proin ac quam eget velit luctus tincidunt vel in nunc.
                      Maecenas cursus erat lacus, id interdum elit accumsan in.
                      Mauris placerat dapibus sem, condimentum interdum nulla
                      varius ac. Mauris quam mauris, rhoncus et tortor vel,
                      tempus dignissim libero. Curabitur sed odio in odio
                      elementum cursus.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-light">
                  <h3 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionFour"
                      aria-expanded="false"
                      aria-controls="questionFour"
                    >
                      What happens if I run out of credit?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="questionFour"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faq"
                  >
                    <div className="accordion-body fs-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer ac pretium dui. Aliquam rutrum justo lorem, in
                      efficitur odio efficitur vel. Integer mattis, neque
                      malesuada sagittis porttitor, enim tortor ullamcorper
                      diam, id eleifend sem mauris at turpis. Curabitur sed nisi
                      nec ligula dictum.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-light">
                  <h3 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionFive"
                      aria-expanded="false"
                      aria-controls="questionFive"
                    >
                      Do you have monthly and yearly billing options?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="questionFive"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faq"
                  >
                    <div className="accordion-body fs-sm">
                      Vestibulum faucibus lectus eget augue pharetra, quis
                      semper lectus gravida. Vestibulum pretium in elit sed
                      iaculis. Curabitur elementum turpis at ipsum molestie, id
                      maximus odio tincidunt. Praesent id lacinia orci.
                      Phasellus at varius arcu. Ut nec lobortis velit.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-light">
                  <h3 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionSix"
                      aria-expanded="false"
                      aria-controls="questionSix"
                    >
                      What happens when I change plans?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="questionSix"
                    aria-labelledby="headingSix"
                    data-bs-parent="#faq"
                  >
                    <div className="accordion-body fs-sm">
                      Nunc non placerat mi, sit amet hendrerit lacus. Quisque
                      cursus lorem vitae placerat ultrices. Morbi ut orci sit
                      amet quam vulputate lobortis. Donec vulputate mi nec nisi
                      tincidunt commodo. Nullam efficitur tincidunt tellus
                      accumsan pellentesque. Suspendisse elementum blandit orci.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-light">
                  <h3 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionSeven"
                      aria-expanded="false"
                      aria-controls="questionSeven"
                    >
                      How do I cancel my paid plan?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="questionSeven"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#faq"
                  >
                    <div className="accordion-body fs-sm">
                      Morbi a consequat diam. Fusce sit amet faucibus erat.
                      className aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Quisque id est
                      dictum, suscipit neque id, ornare nibh. Cras lacinia, est
                      non ultrices porttitor, arcu orci rhoncus leo, egestas
                      condimentum lorem.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA--> */}
    </div>
  );
};

export default Faq;
