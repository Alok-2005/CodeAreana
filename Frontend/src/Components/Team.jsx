import React from "react";

const organizersData = [
  [
    {
      name: "Pranav Nebhnani",
      role: "LEAD",
      img: "/images/lead.png",
    },
    {
      name: "Sejal Rathod",
      role: "CO-LEAD",
      img: "/images/co-lead.png",
    },
    {
      name: "Bhavesh Bhalerao",
      role: "MARKETING HEAD",
      img: "/images/marketing-head.png",
    },
  ],
  [
    {
      name: "Advait Mandhare",
      role: "EXECUTIVE HEAD",
      img: "/images/executive-head.png",
    },
    {
      name: "Shashank Khengre",
      role: "SOCIAL MEDIA HEAD",
      img: "/images/Social-Media_Head.png",
    },
    {
      name: "Harsh Rabadiya",
      role: "EDITORIAL HEAD",
      img: "/images/Editorial-Head.png",
    },
  ],
  [
    {
      name: "Aditi Kshirsagar",
      role: "DESIGN HEAD",
      img: "/images/design-head.png",
    },
    {
      name: "Arnav Wani",
      role: "EVENT & EXECUTION HEAD",
      img: "/images/event-and-executive-head.png",
    },
    {
      name: "Abhinandan Patil",
      role: "CP HEAD",
      img: "/images/cp-head.png",
    },
  ],
];

const Team = () => {
  return (
    <section className="common-section mb-5 pt-5 bg-color" id="team">
      <div className="container text-center common-title">
        <h2 className="common-heading text-white">Organizers</h2>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            {organizersData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {organizersData.map((slide, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
              >
                <div className="row g-4">
                  {slide.map((member, i) => (
                    <div key={i} className="col-xxl-4">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="card p-3" style={{ width: "18rem" }}>
                          <img
                            src={member.img}
                            className="card-img-top"
                            alt={member.name}
                          />
                          <div className="card-body text-center">
                            <p className="card-title mb-3 fw-bold fs-5">
                              {member.name}
                            </p>
                            <p className="card-text">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
