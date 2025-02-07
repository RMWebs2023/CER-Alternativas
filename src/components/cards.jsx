import { FaRegStar } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import logo from "../images/favicon.png";

const Cards = ({ data, theme }) => {
  return (
    <>
      <section
        className={`container text-center mt-5 bg-${theme} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-12 offset-xl-2">
              <div className="text-center mb-8">
                <span className="text-uppercase fw-semi-bold ls-md color">
                  Últimas ofertas
                </span>
                <h2 className="h1 fw-bold mt-3">
                  Explora nuestras ofertas laborales
                </h2>
              </div>

              {data.map((item) => (
                <div
                  className={`container text-center mt-5 bg-${theme} text-${
                    theme === "light" ? "dark" : "light"
                  } card-bordered mb-4 card-hover cursor-pointer card color-grey`}
                  key={item.id}
                >
                  <div className="card-body">
                    <div>
                      <div className="d-md-flex">
                        <div className="mb-3 mb-md-0">
                          <img
                            src={logo}
                            alt="Geeks UI - Bootstrap 5 Template"
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
                                  href="/marketing/jobs/helpdesk-software-engineer-web3crypto"
                                >
                                  {item.name}
                                </a>
                                <span className=" ms-2 new">New</span>
                              </h3>
                              <div>
                                <span>
                                  at <span></span>
                                  {/* <!-- --> */}
                                  HelpDesk (Empresa que busca)
                                  {/* <!-- --> */}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="ms-md-1 w-100 mt-1 mt-xl-1">
                            <p className="description">{item.description}</p>
                          </div>
                          <div className="d-md-flex justify-content-between ">
                            <div className="mb-2 mb-md-0">
                              <span className="me-2">
                                <PiSuitcaseSimpleBold />
                                <span className="ms-1 ">1 - 5 years</span>
                              </span>
                              <span className="me-2">
                                <MdOutlineAttachMoney />
                                <span className="ms-1 ">12k - 18k</span>
                              </span>
                              <span className="me-2">
                                <MdOutlineLocationOn />
                                <span className="ms-1 ">{item.location}</span>
                              </span>
                            </div>
                            <div>
                              <FaRegClock />
                              <span className="ms-1 ">21 hours ago</span>
                            </div>
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
    </>
  );
};

export default Cards;
