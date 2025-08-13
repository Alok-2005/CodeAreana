function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="main-footer-section">
        <div className="contact-details">
          <div className="footer-section py-5 text-white">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
                  <img
                    src="/images/white-logo.png"
                    alt="Footer Logo"
                    className="img-fluid footer-logo"
                  />
                </div>

                <div className="col-lg-2 col-md-6 col-6">
                  <div className="footer-links text-center">
                    <h4 className="text-white mt-5 mb-3">Quick Links</h4>
                    <ul className="text-light-grey list-unstyled d-flex flex-column gap-2 text-center">
                      <li>
                        <a
                          className="custom-link fs-6 fs-md-7 fs-lg-8"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link fs-6 fs-md-7 fs-lg-8"
                          href="https://www.pccoer.com/about-pccoer.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          About College
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link fs-6 fs-md-7 fs-lg-8"
                          href="#about_club"
                        >
                          About Club
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link fs-6 fs-md-7 fs-lg-8"
                          href="#contact_us"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                    <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                      <a
                        href="https://www.google.com/maps/place/PCCOE-Ravet,+Pimpri+Chinchwad+College+of+Engineering+and+Research,+Ravet,+Pune/@18.6502421,73.7426366,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2ba0251959e2d:0x4d7ea2cc35724480!8m2!3d18.650237!4d73.7452115!16s%2Fg%2F11b7x25nm5?entry=ttu"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/images/map.gif"
                          alt="Map GIF"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="mb-10 text-center">
                      <i className="fas fa-map-marker-alt"></i>&nbsp; Plot No.
                      B, Sector no. 110, Gate no.1; Laxminagar, Ravet, Haveli,
                      Pune - 412101
                    </div>

                    <div className="mb-10">
                      <i className="fas fa-phone"></i>&nbsp; 8237238080
                    </div>
                    <div className="mb-10">
                      <i className="fa fa-envelope"></i>&nbsp;
                      pccoer.ravet@gmail.com
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <hr className="container mx-auto" />
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-12 text-center text-lg-start">
                      © 2023-2024 CodeCraft x PCCOER
                    </div>
                    <div className="col-md-4 col-12 mt-3 mt-lg-0">
                      <div className="d-flex justify-content-center justify-content-md-end gap-3">
                        <a
                          href="https://www.instagram.com/codecraft.pccoer_?igsh=MTUwZm9mZWNkeHBvZw=="
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                            <i className="fab fa-instagram"></i>
                          </div>
                        </a>
                        <a
                          href="https://wa.me/918237238080"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                        >
                          <i className="fab fa-x-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
