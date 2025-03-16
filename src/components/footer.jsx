import { useState } from "react";
import logo from "../images/favicon_footer.png";
import dani from "../images/PERFILDANI.jpeg";
import ceci from "../images/PERFILCECI.jpeg";
import { FaWhatsapp } from "react-icons/fa";

const Footer = ({ targetRef }) => {
  const [showModal, setShowModal] = useState(false);

  // modal formulario o link whatsapp

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

  return (
    <footer className="pt-lg-10 pt-5 footer bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="mb-4 text-light">
              <img src={logo} alt="" className="logo-footer" />
              <div className="mt-4">
                <p>
                  Surge de la unión entre CER Hoteles Revenue Management y
                  Alternativas Laborales. Somos profesionales con amplia
                  experiencia en hotelería y turismo, comprometidas con tu
                  crecimiento profesional.
                  <br /> <br />
                  Te conectamos con oportunidades de prácticas rentadas en el
                  exterior y te acompañamos en todo el proceso, desde la
                  postulación hasta tu desempeño laboral. ¡Impulsa tu carrera
                  con nosotros!
                </p>
                {/* <div className="fs-4 mt-4">
                                <a className="mdi mdi-facebook text-muted me-2" href="/marketing/landings/landing-job#">
                                    <svg viewBox="0 0 24 24" style="width:1.0499999999999998rem;height:1.0499999999999998rem" role="presentation">
                                        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" style="fill:currentColor"></path>
                                    </svg>
                                </a>
                                <a className="mdi mdi-twitter text-muted me-2" href="/marketing/landings/landing-job#">
                                    <svg viewBox="0 0 24 24" style="width:1.0499999999999998rem;height:1.0499999999999998rem" role="presentation">
                                        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" style="fill:currentColor"></path>
                                    </svg>
                                </a>
                                <a className="mdi mdi-instagram text-muted " href="/marketing/landings/landing-job#">
                                    <svg viewBox="0 0 24 24" style="width:1.0499999999999998rem;height:1.0499999999999998rem" role="presentation">
                                        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" style="fill:currentColor"></path>
                                    </svg>
                                </a>
                            </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 offset-lg-1 text-light">
            <div className="mb-4">
              <h3 className="fw-bold mb-3">Compañía</h3>
              <ul className="nav nav-footer flex-column nav-x-0 list-unstyled">
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="/marketing/landings/landing-job#"
                  >
                    Home
                  </a>
                </li>
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="/marketing/landings/landing-job#"
                  >
                    Servicios
                  </a>
                </li>
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="#"
                    onClick={handleClick}
                  >
                    Busquedas activas
                  </a>
                </li>
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="#"
                    onClick={handleClick}
                  >
                    Pasantias rentadas en el exterior
                  </a>
                </li>
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="#"
                    onClick={handleClick}
                  >
                    Pasantias rentadas en Argentina
                  </a>
                </li>
                <li className=" ">
                  <a
                    className="nav-link text-light"
                    href="/marketing/landings/landing-job#"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 text-light">
            <div className="mb-4">
              <h3 className="fw-bold mb-3">CER Alternativas</h3>
              <ul className="nav nav-footer flex-column nav-x-0 list-unstyled">
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      setShowModal(true);
                    }}
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="/marketing/landings/landing-job#"
                  >
                    Envianos tu CV!
                  </a>
                </li>
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="/marketing/landings/landing-job#"
                  >
                    Armamos tu cv en inglés
                  </a>
                </li>
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="/marketing/landings/landing-job#"
                  >
                    Preparamos entrevistas
                  </a>
                </li>
                <li className="footer_li">
                  <a
                    className="nav-link text-light"
                    href="/marketing/landings/landing-job#"
                  >
                    Tramites de visa de trabajo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 text-light">
            <div className="mb-4">
              <h3 className="fw-bold mb-3">Contáctanos</h3>
              <p>Dirección Av. Del Libertador 7766</p>
              <p className="mb-1">
                Correo:{" "}
                <a
                  href="mailto:ceralternativas@gmail.com"
                  className="text-light"
                >
                  ceralternativas@gmail.com
                </a>
              </p>
              <p>
                Teléfono:
                {/*  */}
                <a
                  className="text-light fw-semi-bold"
                  href="tel:+5491153103878"
                >
                  +54 9 11 5310 3878
                </a>
              </p>
              <div className="d-flex">
                {/* <a href="/marketing/landings/landing-job#">
                  <img
                    src="/images/svg/appstore.svg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <a className="ms-2" href="/marketing/landings/landing-job#">
                  <img
                    src="/images/svg/playstore.svg"
                    alt=""
                    className="img-fluid"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="align-items-center g-0 border-top py-2 mt-6 row text-light">
          <div className="col-lg-4 col-md-5 col-sm-12">
            <span>
              © 2025
              <span> </span>
              RWbs, Todos los Derechos Reservados.
            </span>
          </div>
          {/* <div className="d-md-flex justify-content-end col-lg-8 col-md-7 col-sm-12">
            <nav className="nav nav-footer">
              <a
                className="nav-link text-light ps-0"
                href="/marketing/landings/landing-job#"
              >
                Privacy Policy
              </a>
              <a
                className="nav-link text-light px-2 px-md-3"
                href="/marketing/landings/landing-job#"
              >
                Cookie Notice
              </a>
              <a
                className="nav-link text-light d-none d-lg-block"
                href="/marketing/landings/landing-job#"
              >
                Do Not Sell My Personal Information
              </a>
              <a
                className="nav-link text-light"
                href="/marketing/landings/landing-job#"
              >
                Terms of Use
              </a>
            </nav>
          </div> */}
        </div>
      </div>

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
                    <h4>Daniela Cerliani - Directora de CER Hoteles</h4>
                    <p>
                      Con amplia trayectoria en el sector hotelero, hoy su
                      consultora brinda soluciones orientadas a potenciar
                      acciones estratégicas para el desarrollo comercial de
                      propiedades hoteleras, gestionando el Revenue Management,
                      Marketing Digital y tecnologías e implementando procesos
                      que conlleven a la mejora de ingresos y volúmenes de
                      reservas.
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
                    <h4>
                      Cecilia Maldonado - Directora de bolsa de alternativa
                      laborales
                    </h4>
                    <p>
                      Tras su experiencia en hotelería y turismo, y su formación
                      en la docencia hoy desempeña un rol en el marco académico
                      siendo coordinadora de cursos de la escuela Vatel y
                      activamente dirigiendo su bolsa de trabajo, en donde
                      recluta y orienta al aplicante para insertarse en el campo
                      laboral. Juntas decidimos fusionarnos para diseñar
                      programas de trabajo en hotelería y turismo y ser nexo
                      entre las empresas y los aplicantes, sirviendo de apoyo en
                      el proceso de búsqueda laboral y de pasantías rentadas,
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

      <a
        target="_blank"
        className="btn-wsp btn-dark btn-float-button m-5 fs-4"
        href="https://api.whatsapp.com/send?phone=5491153103878"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
