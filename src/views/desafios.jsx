import React from 'react'
import Header1 from '../components/header1'
import Footer from '../components/footer'
import './desafios.css'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import desafiosData from '../data/desafios.json'
const Desafios = (props) => {
  return (
    <div className="actividades-container1">
      <div className="actividades-thq-desktop-elm">
        <div className="actividades-thq-featurecards1-elm">
          <Header1 rootClassName="header1root-class-name"></Header1>
          <motion.span 
            className="actividades-thq-text-elm10"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut", y: { type: "spring", visualDuration: 0.4, bounce: 0.4 } }}>
              Desafíos
          </motion.span>
          <div className="actividades-grid-container">
            {desafiosData.map((desafio, index) => (
              <motion.div 
                key={desafio.id}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1, y: { type: "spring", visualDuration: 0.4, bounce: 0.4 } }}>
                <Link to={`/desafios/${desafio.id}`} className="actividad-card">
                  <h3 className="actividad-card-title">{desafio.titulo}</h3>
                  <p className="actividad-card-desc">{desafio.descripcion}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer rootClassName="footerroot-class-name"></Footer>
      </div>
    </div>
  )
}

export default Desafios
