import { useState } from "react";
import icon from "../images/logo_cer_alternativas.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoInvertModeOutline } from "react-icons/io5";
import dani from "../images/PERFILDANI.jpeg";
import lara from "../images/Lara_Calegari.jpg";
// import ceci from "../images/PERFILCECI.jpeg";

const Nav = ({ targetRef, targetRefFooter, theme, toggleTheme }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClick = (e) => {
    e.preventDefault;
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickFooter = (e) => {
    e.preventDefault;
    targetRefFooter.current.scrollIntoView({ behavior: "smooth" });
  };

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
                Inicio
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
                Servicios <span></span>
                <MdKeyboardArrowDown />
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
              <a
                ref={targetRef}
                className="nav-link"
                href="/presentacion-work-and-travel.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Búsquedas activas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleClick}>
                Vacantes en el exterior
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                onClick={handleClick}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Tooltip on bottom"
              >
                Pasantías en Argentina (próximamente)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={openModal}>
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                ref={targetRefFooter}
                onClick={handleClickFooter}
              >
                Contáctanos
              </a>
            </li>

            {showModal && (
              <div className="modal show d-block" tabIndex="-1">
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">¿Quiénes somos?</h4>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={closeModal}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row align-items-stretch mb-4">
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                          <img
                            src={dani}
                            className="img-fluid rounded-circle img-us"
                            alt="Daniela Cerliani"
                            style={{
                              width: "150px",
                              height: "150px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-center">
                          <h5>Daniela Cerliani - Directora de CER Hoteles</h5>
                          <p>
                            Con amplia trayectoria en el sector hotelero, hoy su
                            consultora brinda soluciones orientadas a potenciar
                            acciones estratégicas para el desarrollo comercial
                            de propiedades hoteleras, gestionando el Revenue
                            Management, Marketing Digital y tecnologías e
                            implementando procesos que conlleven a la mejora de
                            ingresos y volúmenes de reservas.
                          </p>
                        </div>
                      </div>

                      <div className="row align-items-stretch">
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                          <img
                            src={lara}
                            className="img-fluid rounded-circle"
                            alt="Cecilia Maldonado"
                            style={{
                              width: "150px",
                              height: "150px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-center">
                          <h4>
                          Lara Calegari - Profesional Hotelera y Marketing specialist
                          </h4>
                          <p>
                            Con formación como Técnica en Hotelería y Turismo y Community Manager, hoy brinda soluciones orientadas a potenciar la visibilidad y comercialización de propiedades hoteleras. Mediante su experiencia en la gestión de OTAs (Online Travel Agencies), colabora activamente en la alta de propiedades, optimización de perfiles y asesoramiento estratégico.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button className="btn-mode" onClick={toggleTheme}>
              <IoInvertModeOutline /> {theme === "light" ? "Dark" : "Light"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
