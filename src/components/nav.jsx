import { useState } from "react";
import icon from "../images/favicon_png.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoInvertModeOutline } from "react-icons/io5";
import dani from "../images/PERFILDANI.jpeg";
import ceci from "../images/PERFILCECI.jpeg";

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
                href="#"
                onClick={handleClick}
              >
                Búsquedas activas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleClick}>
                Pasantías rentadas al exterior
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
                            className="img-fluid rounded-circle"
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
                            src={ceci}
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
                          <h5>
                            Cecilia Maldonado - Directora de bolsa de
                            alternativa laborales
                          </h5>
                          <p>
                            Tras su experiencia en hotelería y turismo, y su
                            formación en la docencia hoy desempeña un rol en el
                            marco académico siendo coordinadora de cursos de la
                            escuela Vatel y activamente dirigiendo su bolsa de
                            trabajo, en donde recluta y orienta al aplicante
                            para insertarse en el campo laboral. <br /> Juntas
                            decidimos fusionarnos para diseñar programas de
                            trabajo en hotelería y turismo y ser nexo entre las
                            empresas y los aplicantes, sirviendo de apoyo en el
                            proceso de búsqueda laboral y de pasantías rentadas,
                            acompañando en su postulación y en el proceso
                            reclutamiento.
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
