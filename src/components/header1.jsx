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
        <div 
          className={`header1-thq-nav-elm-desktop`}
        >
          <Link 
            to="/"
            className="header1-thq-text-elm1"
          >
            Home
          </Link>
          <Link 
            to="/actividades" 
            className="header1-thq-text-elm4"
          > 
            Actividades
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
        </div>

        {/* Menú de navegación */}
        { isMenuOpen && 
          <div 
            className={`header1-thq-nav-elm-mobile`}
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
              to="/actividades" 
              className="header1-thq-text-elm4"
              onClick={closeMenu}
            > 
              Actividades
            </Link>
          </div> 
        }
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
