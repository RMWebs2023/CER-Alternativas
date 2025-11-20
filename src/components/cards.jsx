import { useState } from "react";
import { MdOutlineAttachMoney, MdOutlineLocationOn } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
// import { FaRegClock } from "react-icons/fa";
// import emailjs from "@emailjs/browser";
import logo from "../images/favicon.png";

const Cards = ({ data, theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalCard, setShowModalCard] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    cv: null,
  });

  const openModalCard = (job) => {
    setSelectedJob(job);
    setShowModalCard(true);
  };

  const closeModalCard = () => {
    setShowModalCard(false);
    setSelectedJob(null);
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
    setFormData({ name: "", lastname: "", email: "", phone: "", cv: null });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (
    //   !formData.name ||
    //   !formData.lastname ||
    //   !formData.email ||
    //   !formData.phone ||
    //   !formData.cv
    // )

    if (
      !formData.name ||
      !formData.lastname ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const formDataEmail = new FormData();
    formDataEmail.append("from_name", formData.name);
    formDataEmail.append("from_lastname", formData.lastname);
    formDataEmail.append("from_email", formData.email);
    formDataEmail.append("from_phone", formData.phone);
    formDataEmail.append("cv_file", formData.cv);

    // emailjs
    //   .sendForm(
    //     "service_gfyy33r",
    //     "template_mh1kflu",
    //     formDataEmail,
    //     "5JPVjN0ZH-C24tTVE"
    //   )
    //   .then(
    //     (response) => {
    //       alert("Tu solicitud ha sido enviada correctamente.");
    //       closeModal();
    //     },
    //     (error) => {
    //       alert("Hubo un error al enviar el formulario. Intenta nuevamente.");
    //       console.error("Error:", error);
    //     }
    //   );
  };

  const message = `Hola, soy ${formData.name} ${formData.lastname}. \n\nQuiero aplicar a ${selectedJob?.name}. \n\nMis datos de contacto son: \nEmail: ${formData.email}, \nTeléfono: ${formData.phone} \n\nAdjunto mi CV en el correo. \n\nSaludos.`;

  return (
    <>
      <section
        className={`container mt-5 bg-${theme} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <div className="container cards">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-12 offset-xl-2">
              <div className="text-center mb-8">
                <span className="text-uppercase fw-semi-bold ls-md color">
                  Últimas ofertas
                </span>
                <h2 className="h2 fw-bold mt-3">
                  TU EXPERIENCIA EN HOTELERÍA Y TURISMO ESTÁ A UN CLICK DE
                  DISTANCIA
                </h2>
                <h3 className="h3 fw-bold mt-3">
                  Aplica a tu próxima experiencia en el exterior
                </h3>
              </div>

              {data.map((item) => (
                <div
                  className={`container mt-5 bg-${theme} text-${
                    theme === "light" ? "dark" : "light"
                  } 
                  card-bordered mb-4 card-hover cursor-pointer card color-grey`}
                  key={item.id}
                >
                  <div className="card-body">
                    <div className="d-md-flex">
                      <div className="mb-3 mb-md-0">
                        <img
                          src={logo}
                          alt="Logo de la empresa contratante"
                          className="icon-shape"
                        />
                      </div>
                      <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                        <div className="d-flex justify-content-between mb-3">
                          <div>
                            <h3 className="mb-1 fs-4">
                              <a
                                className={`text-inherit me-1 text-${
                                  theme === "light" ? "dark" : "light"
                                } text-format`}
                                href="#"
                              >
                                {item.name}
                              </a>
                              <span className="ms-2 new">Nuevo</span>
                            </h3>
                            <div>
                              <span>{item.type}</span>
                            </div>
                          </div>
                        </div>

                        <div className="ms-md-1 w-100 mt-1 mt-xl-1">
                          <p className="description">{item.description}</p>
                        </div>

                        <div>
                          <button
                            className="btn button-rwbs"
                            onClick={() => openModal(item)}
                          >
                            Aplicar
                          </button>
                          <button
                            className="btn button-rwbs"
                            onClick={() => openModalCard(item)}
                          >
                            Ver más
                          </button>
                        </div>

                        <div className="d-md-flex justify-content-between">
                          <div className="mb-2 mb-md-0">
                            <span className="me-2">
                              <PiSuitcaseSimpleBold />
                              <span className="ms-1">{item.date}</span>
                            </span>
                            <span className="me-2">
                              {/* <MdOutlineAttachMoney /> */}
                              <span className="ms-1">{item.salary}</span>
                            </span>
                            <span className="me-2">
                              <MdOutlineLocationOn />
                              <span className="ms-1">{item.location}</span>
                            </span>
                          </div>
                          <div>
                            {/* <FaRegClock /> */}
                            {/* <span className="ms-1">21 hours ago</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Aplicando a: {selectedJob?.name}
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    required
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    required
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    required
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                  {/* <input
                    type="file"
                    name="cv"
                    required
                    onChange={handleChange}
                    className="form-control mb-2"
                  /> */}
                  <a
                    target="_blank"
                    href={`mailto:ceralternativas@gmail.com?subject=Postulación ${
                      selectedJob?.name
                    }&body=${encodeURIComponent(message)}.`}
                    className="btn button-rwbs"
                  >
                    Enviar
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal-backdrop show" onClick={closeModal}></div>
      )}

      {showModalCard && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{selectedJob?.name}</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModalCard}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedJob?.description}</p>
                <h5>Requisitos laborales:</h5>
                {selectedJob?.requirements.map((item, id) => (
                  <div key={id}>
                    <ul>
                      <li>{item}</li>
                    </ul>
                  </div>
                ))}
                {selectedJob?.benefits?.length > 0 ? (
                  <>
                    <h5>Beneficios ofrecidos:</h5>
                    {selectedJob.benefits.map((item, id) => (
                      <div key={id}>
                        <ul>
                          <li>{item}</li>
                        </ul>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <p>Posición: {selectedJob?.position}</p>
                    <p>Tipo de oferta: {selectedJob?.type}</p>
                    <p>Horas por semana: {selectedJob?.hoursPerWeek} horas</p>
                    <p>Ubicación: {selectedJob?.location}</p>
                    <p>Salario: {selectedJob?.salary}</p>
                  </>
                )}
                <h5>Vacantes disponibles: </h5>
                {selectedJob?.vacancy.map((item, id) => (
                    <div key={id}>
                      <ul>
                        <li>{item}</li>
                      </ul>
                    </div>
                ) )}
                <button
                  className="btn button-rwbs"
                  onClick={() => {
                    closeModalCard();
                    openModal(selectedJob);
                  }}
                >
                  Aplicar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModalCard && (
        <div className="modal-backdrop show" onClick={closeModalCard}></div>
      )}
    </>
  );
};

export default Cards;
