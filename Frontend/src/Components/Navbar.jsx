function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-color py-2 pt-lg-3">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            <img
              src="/images/white-logo.png"
              alt="CodeCraft x PCCOER Logo"
              className="img-fluid navbar-brand-image"
            />
          </a>
          <button
            className="navbar-toggler menu-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse bg"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a aria-current="page" className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about_club">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact_us">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
