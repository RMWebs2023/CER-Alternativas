import { useState, useRef } from "react";
import Cards from "../components/cards";
import Footer from "../components/footer";
import Nav from "../components/nav";
import offers from "../database/database";
import vector from "../images/vector1.png";
import logoCer from "../images/1.png";
// import stripe from "../images/stripe.png";
// import airbnb from "../images/airbnb.png";
// import discord from "../images/discord.png";
// import booking from "../images/booking.png";
// import pinterest from "../images/pinterest.png";
import usa from "../images/usa.jpg";
import crucero from "../images/crucero.jpg";
import training from "../images/training.jpg";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineLanguage } from "react-icons/hi2";
import { GrUserExpert } from "react-icons/gr";
import { FaPassport } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { SlPeople } from "react-icons/sl";
import { FaPenAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { GrDocumentVerified } from "react-icons/gr";
import { IoTicketOutline } from "react-icons/io5";
import { GiPassport } from "react-icons/gi";
import { LuTicketsPlane } from "react-icons/lu";
import { FaHandHoldingMedical } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import ppal from "../images/ppal.png";
import ppal1 from "../images/ppal1.png";
import ppal2 from "../images/ppal2.png";
import ppal3 from "../images/ppal3.png";
import { BsSearch } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";


const Home = ({ theme, toggleTheme }) => {
  const [titleJob, setTitleJob] = useState("");
  const [searchJob, setSearchJob] = useState("");
  const [data, setData] = useState(offers);
  const targetRef = useRef(null);
  const targetRefFooter = useRef(null);

  const handleTitleJob = (e) => {
    setTitleJob(e.target.value);

    const titleFilter = offers.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    );

    setData(titleFilter);
  };

  const handleSearchJob = (e) => {
    setSearchJob(e.target.value);

    const searchFilter = offers.filter((item) =>
      item.location.toLowerCase().includes(e.target.value)
    );

    setData(searchFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    targetRef.current.scrollIntoView({ behavior: "smooth" });
    if (titleJob) {
      const titleFilter = offers.filter((item) =>
        item.name.toLowerCase().includes(titleJob)
      );
      setData(titleFilter);
    } else if (searchJob) {
      const searchFilter = offers.filter((item) =>
        item.location.toLowerCase().includes(searchJob)
      );
      setData(searchFilter);
    } else {
      setData(offers);
    }
  };

  const message = "Hola, me gustaría dejar mi CV para uno de sus programas.";

  return (
    <main>
      {/* Navbar */}
      <Nav
        targetRef={targetRef}
        targetRefFooter={targetRefFooter}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {/* Primera parte del index */}

      <section
        className={`container text-center mt-5 bg-${theme} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <div className="container">
          <div className="align-items-center row">
            {/* Buscador */}
            <div className="col-lg-6 col-sm-12">
              <div>
                <div className="text-center text-md-start ">
                  <h1 className=" display-2 fw-bold  mb-3">CER ALTERNATIVAS</h1>
                  <p className="lead">Placement Solutions</p>
                </div>
                <div className="mt-8">
                  <div className={`bg-${theme} rounded-md-pill shadow rounded-3 mb-4`}>
                    <div className="p-md-2 p-4">
                      <form className="row g-1">
                        <div className="col-md-5 col-sm-12">
                          <div className="input-group">
                            <span
                              className={`bg-${theme} border-0 pe-0 ps-md-3 ps-md-0 input-group-text`}
                              id="searchJob"
                            >
                              <BsSearch />
                            </span>
                            <input
                              onChange={handleTitleJob}
                              placeholder="Trabajo"
                              aria-label="Job Title"
                              aria-describedby="searchJob"
                              type="search"
                              className="rounded-pill border-0 ps-3 form-focus-none form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="input-group">
                            <span
                              className={`bg-${theme} border-0 pe-0 ps-md-3 ps-md-0 input-group-text`}
                              id="location"
                            >
                              <MdOutlineLocationOn />
                            </span>
                            <input
                              onChange={handleSearchJob}
                              placeholder="Ubicación"
                              aria-label="Search Job"
                              aria-describedby="location"
                              type="search"
                              className="rounded-pill border-0 ps-3 form-focus-none form-control"
                            />
                          </div>
                        </div>
                        <div className="text-end d-grid col-md-3 col-sm-12">
                          <button
                            type="submit"
                            className="rounded-pill btn btn-primary search-button"
                            onClick={handleSubmit}
                          >
                            Buscar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Vector */}
            <div className="text-center col-lg-5 col-sm-12 offset-lg-1">
              <div className="position-relative ">
                <img src={ppal} className="img-fluid "/>
                <div className="position-absolute top-0 mt-7 ms-n6 ms-md-n6 ms-lg-n12 start-0">
                  <img src={ppal1} className="img-fluid" />
                </div>
                <div class="position-absolute bottom-0 mb-12 me-n6 me-md-n4 me-lg-n12 end-0">
                  <img src={ppal2} className="img-fluid" />
                </div>
                <div class="position-absolute bottom-0 mb-n4 ms-n1 ms-md-n4 ms-lg-n7 start-0">
                  <img src={ppal3} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programas */}
      <section
        className={`container text-center mt-5 bg-${theme} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <div className="container">
          <div
            className="row programs"
            style={theme === "light" ? { filter: "invert(0)" } : {}}
          >
            <div className="text-center row">
              <div className="px-lg-10 mb-8 mt-6 col-md-12">
                <span className="text-uppercase fw-semi-bold ls-md color">
                  Oportunidades
                </span>
                <h2 className="h1 fw-bold mt-3">Programas</h2>
              </div>
            </div>
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="card">
                <img src={usa} className="card-img-top" alt="..." />
                <div className="card-body body-card">
                  <h5 className="card-title">
                    Work & Travel y Pasantías rentadas en hoteles de Caribe y
                    EE.UU
                  </h5>
                  <p className="card-text">
                    Vive una experiencia internacional trabajando en hoteles de
                    primer nivel mientras mejoras tus habilidades y conoces
                    nuevas culturas.
                  </p>
                  <a href="#" className="btn button-rwbs">
                    Ver ofertas
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="card">
                <img src={crucero} className="card-img-top" alt="..." />
                <div className="card-body body-card">
                  <h5 className="card-title">Trabajá en Cruceros!</h5>
                  <p className="card-text">
                    Embarcate en una aventura única trabajando a bordo de
                    cruceros y recorriendo el mundo mientras desarrollas tu
                    carrera en hospitalidad.
                  </p>
                  <a href="#" className="btn button-rwbs">
                    Ver ofertas
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="card">
                <img src={training} className="card-img-top" alt="..." />
                <div className="card-body body-card">
                  <h5 className="card-title">
                    Training en Gerenciamiento hotelero
                  </h5>
                  <p className="card-text">
                    Capacítate con expertos en gestión hotelera y adquiere
                    experiencia en la administración de hoteles de prestigio a
                    nivel internacional.
                  </p>
                  <a href="#" className="btn button-rwbs">
                    Ver ofertas
                  </a>
                </div>
              </div>
            </div>
            {/* Apartado con logos de empresas contratantes */}
            {/* <div className="text-center row">
              <div className="col">
                <div className="mb-3 mt-3">
                  <img src={stripe} alt="" className="img-index" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3 mt-3">
                  <img src={airbnb} alt="" className="img-index" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3 mt-3">
                  <img src={discord} alt="" className="img-index" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3 mt-3">
                  <img src={booking} alt="" className="img-index" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3 mt-3">
                  <img src={pinterest} alt="" className="img-index" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Oferta laborales */}
      <div ref={targetRef}></div>
      <Cards data={data} targetRefFooter={targetRefFooter} theme={theme} />
      {/* How it works */}
      <section
        className={`container text-center mt-5 bg-${theme} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-md-12 col-12 offset-xl-1">
              <div className="text-center row">
                <div className="px-lg-10 mb-8 mt-6 col-md-12">
                  <span className="text-uppercase fw-semi-bold ls-md color">
                    Proceso
                  </span>
                  <h2 className="h1 fw-bold mt-3">ETAPAS DEL PROGRAMA</h2>
                  <span className="text-uppercase fw-semi-bold ls-md color">
                    Requisitos
                  </span>
                  <ul className="steps-ul">
                    <li className="steps-li">
                      <LuGraduationCap className="steps-icons" /> <span> </span>
                      Graduados o estudiantes del último año de la carrera de
                      Hotelería y/o Turismo
                    </li>
                    <li className="steps-li">
                      <HiOutlineLanguage className="steps-icons" />{" "}
                      <span> </span>
                      Nivel avanzado de inglés
                    </li>
                    <li className="steps-li">
                      <GrUserExpert className="steps-icons" />
                      Experiencia de al menos 1 año en el rubro hotelero/Turismo
                    </li>
                    <li className="steps-li">
                      <FaPassport className="steps-icons" /> <span> </span>
                      Pasaporte y Visa vigentes
                    </li>
                  </ul>
                </div>
              </div>
              <div className="gy-4 row">
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 process-line smooth-shadow-md border-hiw">
                      <TbFileCv />
                    </div>
                    <h4>Envio el CV</h4>
                    {/* <p className="mb-0 px-1">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 process-line smooth-shadow-md border-hiw">
                      <SlPeople />
                    </div>
                    <h4>Me citan a entrevista</h4>
                    {/* <p className="mb-0 px-2">
                      The base price for a job listing on Geeks is $29 per
                      month. Choose one of our optional upgrades to gain more
                      visibility to your listing.
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 smooth-shadow-md border-hiw">
                      <FaPenAlt />
                    </div>
                    <h4>Me inscribo al programa</h4>
                    {/* <p className="mb-0 px-3">
                      Preview your listing and once you are ready to post it you
                      can add your billing information.
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 process-line smooth-shadow-md border-hiw">
                      <MdAttachMoney />
                    </div>
                    <h4>Pago de la confirmación</h4>
                    {/* <p className="mb-0 px-1">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 smooth-shadow-md border-hiw">
                      <GrDocumentVerified />
                    </div>
                    <h4>Reformulación del CV para presentar en el exterior</h4>
                    {/* <p className="mb-0 px-2">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 process-line smooth-shadow-md border-hiw">
                      <SlPeople />
                    </div>
                    <h4>Entrevista con el empleador</h4>
                    {/* <p className="mb-0 px-3">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 smooth-shadow-md border-hiw">
                      <IoTicketOutline />
                    </div>
                    <h4>Emisión de la oferta de pasantia o trabajo</h4>
                    {/* <p className="mb-0 px-1">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 process-line smooth-shadow-md border-hiw">
                      <MdAttachMoney />
                    </div>
                    <h4>Pago del saldo del programa</h4>
                    {/* <p className="mb-0 px-2">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 smooth-shadow-md border-hiw">
                      <GiPassport />
                    </div>
                    <h4>Tramitación de Visa</h4>
                    {/* <p className="mb-0 px-3">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 process-line smooth-shadow-md border-hiw">
                      <LuTicketsPlane />
                    </div>
                    <h4>Emisión del pasaje aéreo</h4>
                    {/* <p className="mb-0 px-1">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 process-line smooth-shadow-md border-hiw">
                      <FaHandHoldingMedical />
                    </div>
                    <h4>Seguro médico</h4>
                    {/* <p className="mb-0 px-2">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-lg border-2 fs-3 rounded-circle mb-4 smooth-shadow-md border-hiw">
                      <BiTrip />
                    </div>
                    <h4>Traslado al país de destino</h4>
                    {/* <p className="mb-0 px-3">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className=" text-center">
                    <div className="icon-shape-hiw icon-xxl border-2 fs-3 rounded-circle mb-4 smooth-shadow-md border-hiw">
                      <BiLike className="last-icon" />
                    </div>
                    <h3>¡COMIENZA LA EXPERIENCIA!</h3>
                    {/* <p className="mb-0 px-1">
                      Fill in the details of the job be sure to include your
                      location restrictions if you have em!
                    </p> */}
                  </div>
                </div>
                <div className="mt-8 text-center col-sm-12">
                  <a
                    target="_blank"
                    role="button"
                    tabIndex="0"
                    href={`https://wa.me/5491153103878?text=${message}`}
                    className="btn button-rwbs"
                  >
                    Aplica ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Filtro por roles */}
      {/* <section
        className={`container text-center mt-5 bg-${theme} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-md-12 col-12 offset-xl-1">
              <div className="text-center row">
                <div className="px-lg-10 mb-8 mt-6 col-md-12">
                  <span className="text-uppercase color fw-semi-bold ls-md">
                    Browse Category
                  </span>
                  <h2 className="h1 fw-bold mt-3">
                    Discover jobs across popular roles
                  </h2>
                  <p className="mb-0 fs-4">
                    Select a role and we &#x27;ll show you relevant jobs for it!
                  </p>
                </div>
              </div>
              <div className="gy-4 row">
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="border-top border-muted border-4 card-hover-with-icon card">
                    <div className="card-body color-grey text-light">
                      <div className="icon-shape-cat icon-lg rounded-circle bg-light text-muted mb-3 card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-activity"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h4 className="mb-0">Analtyics</h4>
                          <p className="mb-0 text-light">2k Jobs</p>
                        </div>
                        <a href="#" className="text-inherit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="border-top border-muted border-4 card-hover-with-icon  card">
                    <div className="card-body color-grey text-light">
                      <div className="icon-shape-cat icon-lg rounded-circle bg-light text-muted mb-3  card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-palette"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                          <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"></path>
                        </svg>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h4 className="mb-0">UI / UX Design</h4>
                          <p className="mb-0 text-light">1k Jobs</p>
                        </div>
                        <a href="#" className="text-inherit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="border-top border-muted border-4 card-hover-with-icon  card">
                    <div className="card-body color-grey text-light">
                      <div className="icon-shape-cat icon-lg rounded-circle bg-light text-muted mb-3  card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-code-slash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path>
                        </svg>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h4 className="mb-0">Developer</h4>
                          <p className="mb-0 text-light">800 Jobs</p>
                        </div>
                        <a href="#" className="text-inherit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="border-top border-muted border-4 card-hover-with-icon  card">
                    <div className="card-body color-grey text-light">
                      <div className="icon-shape-cat icon-lg rounded-circle bg-light text-muted mb-3  card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-people"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                        </svg>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h4 className="mb-0">Product Manager</h4>
                          <p className="mb-0 text-light">1.2K Jobs</p>
                        </div>
                        <a href="#" className="text-inherit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="border-top border-muted border-4 card-hover-with-icon  card">
                    <div className="card-body color-grey text-light">
                      <div className="icon-shape-cat icon-lg rounded-circle bg-light text-muted mb-3  card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h4 className="mb-0">SEO</h4>
                          <p className="mb-0 text-light">1200 Jobs</p>
                        </div>
                        <a href="#" className="text-inherit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="border-top border-muted border-4 card-hover-with-icon  card">
                    <div className="card-body color-grey text-light">
                      <div className="icon-shape-cat icon-lg rounded-circle bg-light text-muted mb-3  card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-bar-chart"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"></path>
                        </svg>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h4 className="mb-0">Data Analytics</h4>
                          <p className="mb-0 text-light">200 Jobs</p>
                        </div>
                        <a href="#" className="text-inherit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="border-top border-muted border-4 card-hover-with-icon  card">
                    <div className="card-body color-grey text-light">
                      <div className="icon-shape-cat icon-lg rounded-circle bg-light text-muted mb-3  card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-phone"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path>
                          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                        </svg>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h4 className="mb-0">Mobile Developer</h4>
                          <p className="mb-0 text-light">120 Jobs</p>
                        </div>
                        <a href="#" className="text-inherit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="border-top border-muted border-4 card-hover-with-icon  card">
                    <div className="card-body color-grey text-light">
                      <div className="icon-shape-cat icon-lg rounded-circle bg-light text-muted mb-3  card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-bank"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"></path>
                        </svg>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h4 className="mb-0">Finance</h4>
                          <p className="mb-0 text-light">5k Jobs</p>
                        </div>
                        <a href="#" className="text-inherit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center col-12">
                  <a
                    role="button"
                    tabIndex="0"
                    href="#"
                    className="btn button-rwbs"
                  >
                    View All Category
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonios */}
      {/* <section
        className={`container text-center mt-5 bg-${theme} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-md-12 col-12 offset-xl-1">
              <div className="text-center row">
                <div className="px-md-16 mb-8 mt-6 col-md-12">
                  <span className="text-uppercase color fw-semi-bold ls-md">
                    Customer stories
                  </span>
                  <h2 className="h1 fw-bold mt-3  mb-2">
                    What our customer stories
                  </h2>
                  <p className="mb-0 fs-4">
                    A customer story is an engaging article integrating
                    testimonial quotes from a happy client or customer praising
                    the work completed together.
                  </p>
                </div>
              </div>
              <div className="align-items-center row">
                <div className="col-lg-7 col-md-12 col-12">
                  <div className="mb-8 mb-lg-0 me-lg-4">
                    <p className="display-6 mb-4 lh-2">
                      &quot;Geeksjobs Welcome has helped us achieve continuity
                      to ensure that all of our employees are on the same
                      page.&quot;
                    </p>
                    <p className="mb-0 ">David Stokes</p>
                    <span className="">Program Manager at Company</span>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 col-12">
                  <div>
                    <img
                      src={testimonio}
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <a
                    role="button"
                    tabIndex="0"
                    href="#"
                    className="mt-lg-2 mt-4 btn button-rwbs"
                  >
                    View All Stories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Top de empresas contratando */}
      {/* <section
        ref={targetRefFooter}
        className={`container text-center mt-5 bg-${theme} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <div className="container companies">
          <div className="row">
            <div className="col-xl-10 col-md-12 col-12 offset-xl-1">
              <div className="text-center row">
                <div className="px-lg-10 mb-8 mt-6 col-md-12">
                  <span className="text-uppercase color fw-semi-bold ls-md">
                    Top Companies Hiring
                  </span>
                  <h2 className="h1 fw-bold mt-3 mb-2">
                    Featured companies actively hiring
                  </h2>
                  <p className="fs-4 mb-0">
                    Nam velit neque eleifend at gravida iaculis cursus at orci.{" "}
                  </p>
                </div>
              </div>
              <div className="gy-4 row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card-bordered card-hover h-100 card">
                    <div
                      className={`card-body bg-${theme} text-${
                        theme === "light" ? "dark" : "light"
                      }`}
                    >
                      <img
                        src="/images/job/job-company-logo-a.svg"
                        alt=""
                        className=""
                      />
                      <div className="my-4">
                        <h3 className="lh-1">Amazon</h3>
                        <p className="mb-0">Worlds largest Internet Company</p>
                      </div>
                      <p className="mb-0">
                        <span
                          className={`fw-semi-bold text-${
                            theme === "light" ? "dark" : "light"
                          }`}
                        >
                          4240+
                        </span>
                        Job Posting
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card-bordered card-hover h-100 card">
                    <div
                      className={`card-body bg-${theme} text-${
                        theme === "light" ? "dark" : "light"
                      }`}
                    >
                      <img
                        src="/images/job/job-company-logo-g.svg"
                        alt=""
                        className=""
                      />
                      <div className="my-4">
                        <h3 className="lh-1">Google</h3>
                        <p className="mb-0">
                          Search the world &#x27;s information
                        </p>
                      </div>
                      <p className="mb-0">
                        <span
                          className={`fw-semi-bold text-${
                            theme === "light" ? "dark" : "light"
                          }`}
                        >
                          216+
                        </span>
                        Job Posting
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card-bordered card-hover h-100 card">
                    <div
                      className={`card-body bg-${theme} text-${
                        theme === "light" ? "dark" : "light"
                      }`}
                    >
                      <img
                        src="/images/job/job-company-logo-l.svg"
                        alt=""
                        className=""
                      />
                      <div className="my-4">
                        <h3 className="lh-1">Lenovo</h3>
                        <p className="mb-0">
                          Official site and buy online the best laptops
                        </p>
                      </div>
                      <p className="mb-0">
                        <span
                          className={`fw-semi-bold text-${
                            theme === "light" ? "dark" : "light"
                          }`}
                        >
                          195+
                        </span>
                        Job Posting
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card-bordered card-hover h-100 card">
                    <div
                      className={`card-body bg-${theme} text-${
                        theme === "light" ? "dark" : "light"
                      }`}
                    >
                      <img
                        src="/images/job/job-company-logo-p.svg"
                        alt=""
                        className=""
                      />
                      <div className="my-4">
                        <h3 className="lh-1">PayPal</h3>
                        <p className="mb-0">
                          Safer and Easier Way to Pay Online
                        </p>
                      </div>
                      <p className="mb-0">
                        <span
                          className={`fw-semi-bold text-${
                            theme === "light" ? "dark" : "light"
                          }`}
                        >
                          180+
                        </span>
                        Job Posting
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center col-12">
                  <a
                    role="button"
                    tabIndex="0"
                    href="#"
                    className="btn button-rwbs"
                  >
                    View All Companies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Footer */}
      <div ref={targetRefFooter}></div>
      <Footer targetRef={targetRef} />
    </main>
  );
};

export default Home;
