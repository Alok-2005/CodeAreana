function About() {
  return (
    <div>
      {/* About / Services Section */}
      <section className="services-section">
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading">About Us</h2>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container mt-5">
          <div className="row g-5">
            <div className="col-xxl-4 col-lg-4 col-12">
              <div className="card-box rounded-2 p-5 text-center">
                <img
                  alt="Objectives GIF"
                  className="img-fluid"
                  src="/images/link.gif"
                  width="200"
                />

                <h5 className="my-3 fw-normal">Objectives</h5>
                <p className="pe-3 mb-5">
                  Fueling coding passion at PCCOE&R through collaborative
                  learning and projects.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                    href="https://drive.google.com/file/d/1tCFlnNPpQTBxx0_k6ow5LPY1mcX8nFn1/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-right"> </i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-4 col-12">
              <div className="card-box rounded-2 p-5 text-center">
                <img
                  alt="Events GIF"
                  className="img-fluid"
                  src="/images/speaker.gif"
                  width="200"
                />

                <h5 className="my-3 fw-normal">Events</h5>
                <p className="pe-3 mb-5">
                  Enriching campus life with engaging and diverse events at
                  PCCOE&R.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                    href="https://drive.google.com/file/d/1my_flE1rhfyRuTHzw-znQqAU1qMN4bv9/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-right"> </i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-4 col-12">
              <div className="card-box rounded-2 p-5 text-center">
                <img
                  alt="Team GIF"
                  className="img-fluid"
                  src="/images/seo.gif"
                  width="200"
                />
                <h5 className="my-3 fw-normal">Team</h5>
                <p className="pe-3 mb-5">
                  Meet the driving force behind PCCOE&R's Code Club – a
                  passionate team committed to fostering a thriving coding
                  community.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                    href="https://drive.google.com/file/d/1HbLl3lXVQTiUaBNue3vAmSOdNw9KuCFs/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-right"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
