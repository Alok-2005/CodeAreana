function ContactUs() {
  return (
    <div>
      {/* Contact Section */}
      <section
        className="common-section bg-color contact-section text-white"
        id="contact_us"
      >
        <div className="custom-shape-divider-top-1684211116">
          <svg
            data-name="Layer 1"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="shape-fill"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
          </svg>
        </div>

        <div className="container text-center fw-bold common-title mt-5">
          <h2 className="common-heading text-white">Contact Us</h2>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container">
          <div className="form-section mx-auto">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="first-name">
                      First name
                    </label>
                    <input
                      className="form-control"
                      id="first-name"
                      placeholder="First name"
                      aria-label="First name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="last-name" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="last-name"
                      placeholder="Last name"
                      aria-label="Last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  required
                  placeholder="Enter your email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-white">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  required
                  placeholder="Enter your message"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
