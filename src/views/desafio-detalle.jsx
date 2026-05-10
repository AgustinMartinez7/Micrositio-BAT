import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import Header1 from "../components/header1";
import Footer from "../components/footer";
import "./actividad-detalle.css";
import desafiosData from "../data/desafios.json";

const ActividadDetalle = () => {
  const { id } = useParams();
  const actividad = desafiosData.find((act) => act.id === id);

  if (!actividad) {
    return (
      <div className="act-detalle-container1">
        <div className="act-detalle-thq-featurecards1-elm">
          <Header1 rootClassName="header1root-class-name"></Header1>
          <h1 className="act-detalle-title">Desafío no encontrado</h1>
          <Link to="/desafios" className="act-detalle-back-link">
            Volver a Desafíos
          </Link>
          <Footer rootClassName="footerroot-class-name"></Footer>
        </div>
      </div>
    );
  }

  return (
    <div className="act-detalle-container1">
      <div className="act-detalle-thq-desktop-elm">
        <div className="act-detalle-thq-featurecards1-elm">
          <Header1 rootClassName="header1root-class-name"></Header1>

          <motion.div
            className="act-detalle-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              y: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
            }}
          >
            <Link to="/desafios" className="act-detalle-back-link">
              ← Volver a Desafíos
            </Link>
            <h1 className="act-detalle-title">{actividad.titulo}</h1>
            <p className="act-detalle-desc">{actividad.descripcion}</p>
          </motion.div>

          <motion.div
            className="act-detalle-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeInOut",
              y: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
            }}
          >
            <div className="act-detalle-grid">
              {Object.entries(actividad).map(([key, value]) => {
                if (["id", "titulo", "descripcion", "imagen"].includes(key))
                  return null;

                const isLongText =
                  typeof value === "string" && value.length > 150;
                let contentNode = null;

                if (Array.isArray(value)) {
                  contentNode = (
                    <div className="act-detalle-section-text">
                      {value.map((item, i) => (
                        <div key={i} className="evidence-item">
                          {item.value ? (
                            <a
                              href={item.value}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <span>{item.label}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                } else if (typeof value === "object" && value !== null) {
                  contentNode = (
                    <p className="act-detalle-section-text">
                      {JSON.stringify(value)}
                    </p>
                  );
                } else {
                  contentNode = (
                    <p className="act-detalle-section-text">{value}</p>
                  );
                }

                return (
                  <div
                    key={key}
                    className={`act-detalle-section ${isLongText ? "full-width" : ""}`}
                  >
                    <h3 className="act-detalle-section-title">{key}</h3>
                    {contentNode}
                  </div>
                );
              })}
            </div>
            {actividad.imagen && (
              <div className="act-detalle-image-container">
                <img
                  src={actividad.imagen}
                  alt={actividad.titulo}
                  className="act-detalle-image"
                />
              </div>
            )}
          </motion.div>
        </div>
        <Footer rootClassName="footerroot-class-name"></Footer>
      </div>
    </div>
  );
};

export default ActividadDetalle;
