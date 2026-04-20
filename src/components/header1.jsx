import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

import PropTypes from 'prop-types'

import './header1.css'

const Header1 = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className={`header1-thq-header1-elm ${props.rootClassName} `}>
      <div className="header1-container">
        <img alt="image" src="/batblanco-200h.png" className="header1-image" />
        
        {/* Botón hamburguesa para dispositivos móviles */}
        <button 
          className={`header1-hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu en pantallas grandes */}
        <motion.div 
          className={`header1-thq-nav-elm-desktop`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Link 
            to="/"
            className="header1-thq-text-elm1"
          >
            Home
          </Link>
          <Link 
            to="/desafios" 
            className="header1-thq-text-elm2"
          >
            Desafios
          </Link>
          <Link 
            to="/tpi" 
            className="header1-thq-text-elm3"
          >
            TPI
          </Link>
          <Link 
            to="/#idMapas" 
            className="header1-thq-text-elm4"
          > 
            Mapas Conceptuales
          </Link>
        </motion.div>

        {/* Menú de navegación */}
        <motion.div 
          className={`header1-thq-nav-elm-mobile ${isMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            y: isMenuOpen ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
        >
          <Link 
            to="/" 
            className="header1-thq-text-elm1"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/desafios" 
            className="header1-thq-text-elm2"
            onClick={closeMenu}
          >
            Desafios
          </Link>
          <Link 
            to="/tpi" 
            className="header1-thq-text-elm3"
            onClick={closeMenu}
          >
            TPI
          </Link>
          <Link 
            to="/#idMapas" 
            className="header1-thq-text-elm4"
            onClick={closeMenu}
          > 
            Mapas Conceptuales
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

Header1.defaultProps = {
  rootClassName: '',
}

Header1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header1
