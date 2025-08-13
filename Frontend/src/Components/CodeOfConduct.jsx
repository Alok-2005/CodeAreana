function CodeOfConduct() {
  return (
    <div className="code-of-conduct">
      {/* Code of Conduct */}
      <section className="common-section business-section" id="online_services">
        <div className="container text-center fw-bold common-title">
          <h2 className="common-heading">CodeCraft Code of Conduct</h2>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container">
          <div className="row g-5">
            {[
              {
                title: "Respectful Interaction",
                text: "Interact with fellow members in a respectful and considerate manner, fostering a positive atmosphere.",
              },
              {
                title: "Inclusive Community",
                text: "Embrace diversity and inclusivity, making CodeCraft a welcoming space for everyone.",
              },
              {
                title: "Positive Collaboration",
                text: "Encourage and engage in positive collaboration, supporting each other's learning and growth.",
              },
              {
                title: "Maintain Learning Environment",
                text: "Contribute to maintaining a focused and positive learning environment during club activities.",
              },
              {
                title: "Prompt Reporting",
                text: "Report any violations of the Code of Conduct promptly to CodeCraft organizers for investigation.",
              },
              {
                title: "Responsible Representation",
                text: "Represent CodeCraft responsibly, both online and offline, adhering to high standards of behavior.",
              },
            ].map((item, idx) => (
              <div className="col-xl-6 col-md-12" key={idx}>
                <div className="d-flex px-3 py-5 shadow">
                  <div className="row">
                    <p className="mb-3 fw-bolder">{item.title}</p>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CodeOfConduct;
