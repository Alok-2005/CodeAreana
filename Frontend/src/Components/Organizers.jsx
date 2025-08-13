function Organizers() {
  return (
    <div>
      {/* Faculty Sponsors */}
      <section className="common-section blog-section">
        <div className="common-heading container text-center common-title">
          <h2 className="common-heading my-5">Faculty Sponsors</h2>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container text-center my-5">
          <div className="row">
            <div className="col-lg-4 mx-auto my-3">
              <img
                src="/images/hod-comp-dept-pccoer-2.jpg"
                alt="Dr. Archana Ajit Chaugule"
                height="300"
                width="300"
                style={{ border: "1px solid black" }}
                className="img-fluid rounded-circle"
              />
              <h2 className="fw-normal" style={{ fontSize: 24, marginTop: 15 }}>
                Dr. Archana Ajit Chaugule
              </h2>
              <p style={{ fontSize: 20 }}>Chairperson</p>
            </div>

            <div className="col-lg-4 mx-auto my-3">
              <img
                src="/images/deepa1.png"
                alt="Prof. Deepa Pushkar Mahajan"
                height="300"
                width="300"
                style={{ border: "1px solid black" }}
                className="img-fluid rounded-circle"
              />
              <h2 className="fw-normal" style={{ fontSize: 24, marginTop: 15 }}>
                Prof. Deepa Pushkar Mahajan
              </h2>
              <p style={{ fontSize: 20 }}>Vice-Chairperson</p>
            </div>

            <div className="col-lg-4 mx-auto my-3">
              <img
                src="/images/shrinika-inamdar1.jpg"
                alt="Prof. Shrinika Shreyas Inamdar"
                height="300"
                width="300"
                style={{ border: "1px solid black" }}
                className="img-fluid rounded-circle"
              />
              <h2 className="fw-normal" style={{ fontSize: 24, marginTop: 15 }}>
                Prof. Shrinika Shreyas Inamdar
              </h2>
              <p style={{ fontSize: 20 }}>Faculty Co-ordinator</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Organizers;
