function MoreInfo() {
  // Function to handle the button click
  const redirectToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* More Info Section */}
      <section className="more-info-section bg-color" id="about_club">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 img-section pl-md-5 mb-4 d-none d-xl-block">
              <figure>
                <img
                  alt="About CodeCraft"
                  className="img-fluid"
                  src="/images/about.gif"
                />
              </figure>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-start">
              <h1 className="common-heading text-capitalize fw-bolder text-white mb-4">
                What is CodeCraft?
              </h1>
              <p className="mb-4 para-width text-light-grey">
                CodeCraft, designed for second-year engineering students,
                tailors its activities to newcomers and those seeking to enhance
                coding skills. The club provides workshops on various coding
                languages and technologies, led by experienced students and
                faculty. Additionally, regular coding challenges and hackathons
                offer opportunities to test and collaborate on projects.
                CodeCraft is an ideal platform for second-year engineering
                students to learn and practice coding, fostering connections
                with like-minded peers and facilitating new friendships.
              </p>

              <button
                className="btn btn-primary px-5 py-2"
                onClick={redirectToContact}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoreInfo;
