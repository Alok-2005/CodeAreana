function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-main bg-color hero-section">
        <div className="container">
          <div className="row justify-content-around align-items-center mb-3 mb-n3">
            <div className="col-md-5 col-lg-6 col-xl-6">
              <div className="text-md-start text-center mb-3">
                <img
                  src="/images/white-logo.png"
                  alt="CodeCraft Logo"
                  className="img-fluid rounded"
                  style={{
                    maxHeight: "200px",
                    width: "auto",
                    borderRadius: "15px",
                  }}
                />
              </div>
            </div>

            <div className="col-md-7 col-lg-6 col-xl-6">
              <div className="d-flex flex-column align-items-start justify-content-center text-md-start text-center">
                <h1 className="text-capitalize fw-bolder text-white featurette-heading mb-3 slide-in-left">
                  Where <span className="text-danger">Errors</span> Are Just
                  Stepping Stones...
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1684208460">
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
      </section>
    </div>
  );
}

export default Hero;
