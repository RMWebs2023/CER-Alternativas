import icon from "../images/favicon_png.png";

const Nav = ({ targetRef, targetRefFooter }) => {
  const handleClick = (e) => {
    e.preventDefault;
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickFooter = (e) => {
    e.preventDefault;
    targetRefFooter.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={icon}
            alt="Logo"
            width="70"
            height="64"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse text-light"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Oportunidades laborales
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cruceros
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hoteles de Argentina
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Training en Gerenciamiento
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a ref={targetRef} className="nav-link" href="#" onClick={handleClick}>
                Búsquedas activas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleClick}>
                Pasantías rentadas al exterior
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleClick}>
                Pasantías en Argentina
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleClickFooter}>
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
