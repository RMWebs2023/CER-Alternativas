const Nav = () => {
  return (
    <nav className="navbar-default navbar navbar-expand-lg navbar-light">
      <div className="px-0 container">
        <a className="navbar-brand" href="/">
          <img src="/images/brand/logo/logo.svg" alt="" className="" />
        </a>
        <button
          aria-controls="navbar-default"
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed"
        >
          <span className="icon-bar top-bar mt-0"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar-default">
          <div className="ms-auto navbar-nav">
            <div className="nav-item pt-1">
              <a
                data-rr-ui-event-key="/marketing/landings/landing-job/"
                className="nav-link"
                href="/marketing/landings/landing-job"
              >
                Home
              </a>
            </div>
            <div className="nav-item dropdown">
              <a
                aria-expanded="false"
                role="button"
                className="dropdown-toggle nav-link"
                tabIndex="0"
                href="#"
              >
                Listing
              </a>
            </div>
            <div className="nav-item dropdown">
              <a
                aria-expanded="false"
                role="button"
                className="dropdown-toggle nav-link"
                tabIndex="0"
                href="#"
              >
                Pages
              </a>
            </div>
            <div className="nav-item pt-1">
              <a data-rr-ui-event-key="/" className="nav-link" href="/">
                Back to Demo
              </a>
            </div>
            <div className="nav-item dropdown">
              <a
                id="basic-nav-dropdown"
                aria-expanded="false"
                role="button"
                className="dropdown-toggle no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0"
                tabIndex="0"
                href="#"
              >
                ...
              </a>
            </div>
            <div className="ms-6 mt-3 mt-lg-0">
              <div className="d-flex align-items-center">
                <a
                  data-rr-ui-event-key="#"
                  className="btn btn-outline-primary me-2 btn"
                  href="/marketing/landings/landing-job#"
                >
                  Sign In
                </a>
                <a
                  data-rr-ui-event-key="#"
                  className="btn btn-primary btn"
                  href="/marketing/landings/landing-job#"
                >
                  Sign Up
                </a>
              </div>
            </div>
            <span className="ms-auto mt-3 mt-lg-0"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
