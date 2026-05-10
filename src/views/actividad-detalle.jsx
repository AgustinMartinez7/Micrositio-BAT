import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Header1 from '../components/header1'
import Footer from '../components/footer'
import './actividad-detalle.css'
import actividadesData from '../data/actividades.json'

const ActividadDetalle = () => {
  const { id } = useParams();
  const actividad = actividadesData.find(act => act.id === id);

  if (!actividad) {
    return (
      <div className="act-detalle-container1">
        <div className="act-detalle-thq-featurecards1-elm">
          <Header1 rootClassName="header1root-class-name"></Header1>
          <h1 className="act-detalle-title">Actividad no encontrada</h1>
          <Link to="/actividades" className="act-detalle-back-link">Volver a Actividades</Link>
          <Footer rootClassName="footerroot-class-name"></Footer>
        </div>
      </div>
    )
  }

  return (
    <div className="act-detalle-container1">
      <div className="act-detalle-thq-desktop-elm">
        <div className="act-detalle-thq-featurecards1-elm">
          <Header1 rootClassName="header1root-class-name"></Header1>
          
          <motion.div 
            className="act-detalle-header"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut", y: { type: "spring", visualDuration: 0.4, bounce: 0.4 } }}>
            <Link to="/actividades" className="act-detalle-back-link">← Volver a Actividades</Link>
            <h1 className="act-detalle-title">{actividad.titulo}</h1>
            <p className="act-detalle-desc">{actividad.descripcion}</p>
          </motion.div>

          <motion.div 
            className="act-detalle-content"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut", y: { type: "spring", visualDuration: 0.4, bounce: 0.4 } }}>
            <div className="act-detalle-grid">
              {(() => {
                const skip = ['id', 'titulo', 'descripcion', 'imagen'];
                const problemKey = 'Problema abordado';
                const toolsKey = 'Herramientas';
                const evidencesKey = 'Evidencias';
                const solutionKey = 'Solución';
                const reflectionKey = 'Reflexión del equipo';

                const remaining = Object.keys(actividad).filter(k => !skip.includes(k) && ![problemKey, toolsKey, evidencesKey, solutionKey, reflectionKey].includes(k));

                const nodes = [];

                if (actividad[problemKey]) {
                  nodes.push(
                    <div key={problemKey} className={`act-detalle-section full-width`}>
                      <h3 className="act-detalle-section-title">{problemKey}</h3>
                      <p className="act-detalle-section-text">{actividad[problemKey]}</p>
                    </div>
                  );
                }

                const hasTools = !!actividad[toolsKey];
                const hasEvidences = !!actividad[evidencesKey];

                if (hasTools || hasEvidences) {
                  if (hasTools) {
                    nodes.push(
                      <div key={toolsKey} className="act-detalle-section">
                        <h3 className="act-detalle-section-title">{toolsKey}</h3>
                        <p className="act-detalle-section-text">{actividad[toolsKey]}</p>
                      </div>
                    );
                  } else {
                    nodes.push(<div key="tools-empty" />);
                  }

                  if (hasEvidences) {
                    nodes.push(
                      <div key={evidencesKey} className="act-detalle-section">
                        <h3 className="act-detalle-section-title">{evidencesKey}</h3>
                        <div className="act-detalle-section-text">
                          {actividad[evidencesKey].map((item, i) => {
                            const val = item.value || '';
                            const isUrl = typeof val === 'string' && /^(https?:\/\/)/i.test(val);
                            return (
                              <div key={i} className="evidence-item">
                                {isUrl ? (
                                  <a href={val} target="_blank" rel="noopener noreferrer">{item.label}</a>
                                ) : (
                                  <span>{item.label}</span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                }

                if (actividad[solutionKey] || actividad[reflectionKey]) {
                  nodes.push(
                    <div key="sol-ref" className={`act-detalle-section full-width`}>
                      {actividad[solutionKey] && (
                        <>
                          <h3 className="act-detalle-section-title">{solutionKey}</h3>
                          <p className="act-detalle-section-text">{actividad[solutionKey]}</p>
                        </>
                      )}
                      {actividad[reflectionKey] && (
                        <>
                          <h3 className="act-detalle-section-title">{reflectionKey}</h3>
                          <p className="act-detalle-section-text">{actividad[reflectionKey]}</p>
                        </>
                      )}
                    </div>
                  );
                }

                remaining.forEach((key) => {
                  const value = actividad[key];
                  const isLongText = typeof value === 'string' && value.length > 150;
                  let contentNode = null;

                  if (Array.isArray(value)) {
                    contentNode = (
                      <div className="act-detalle-section-text">
                        {value.map((item, i) => (
                          <div key={i} className="evidence-item">
                            <strong>{item.label || i}:</strong>{' '}
                            <span dangerouslySetInnerHTML={{ __html: item.value || item || ' ' }} />
                          </div>
                        ))}
                      </div>
                    );
                  } else if (typeof value === 'object' && value !== null) {
                    contentNode = <p className="act-detalle-section-text">{JSON.stringify(value)}</p>;
                  } else {
                    contentNode = <p className="act-detalle-section-text">{value}</p>;
                  }

                  nodes.push(
                    <div key={key} className={`act-detalle-section ${isLongText ? 'full-width' : ''}`}>
                      <h3 className="act-detalle-section-title">{key}</h3>
                      {contentNode}
                    </div>
                  );
                });

                return nodes;
              })()}
            </div>
            {actividad.imagen && (
              <div className="act-detalle-image-container">
                <img src={actividad.imagen} alt={actividad.titulo} className="act-detalle-image" />
              </div>
            )}
          </motion.div>
        </div>
        <Footer rootClassName="footerroot-class-name"></Footer>
      </div>
    </div>
  )
}

export default ActividadDetalle
