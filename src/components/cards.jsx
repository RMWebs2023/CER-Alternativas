import { useState } from "react";
import { MdOutlineAttachMoney, MdOutlineLocationOn } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
// import emailjs from "@emailjs/browser";
import logo from "../images/favicon.png";

const Cards = ({ data, theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    cv: null,
  });

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

    if (
      !formData.name ||
      !formData.lastname ||
      !formData.email ||
      !formData.phone ||
      !formData.cv
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

  const message = `Hola, soy ${formData.name} ${formData.lastname}. Quiero aplicar a ${selectedJob}. Mis datos de contacto son: email: ${formData.email}, teléfono: ${formData.phone}`;

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
                              <span>CER Alternativas</span>
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
                        </div>

                        <div className="d-md-flex justify-content-between">
                          <div className="mb-2 mb-md-0">
                            <span className="me-2">
                              <PiSuitcaseSimpleBold />
                              <span className="ms-1">1 - 5 años</span>
                            </span>
                            <span className="me-2">
                              <MdOutlineAttachMoney />
                              <span className="ms-1">12k - 18k</span>
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
                <h5 className="modal-title">
                  Aplicando a: {selectedJob?.name}
                </h5>
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
                  <input
                    type="file"
                    name="cv"
                    required
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                  <a
                    target="_blank"
                    href={`https://wa.me/5491153103878?text=${message}`}
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
    </>
  );
};

export default Cards;
