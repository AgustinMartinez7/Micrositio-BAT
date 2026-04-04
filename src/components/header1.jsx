import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

import PropTypes from 'prop-types'

import './header1.css'

const Header1 = (props) => {
  return (
    <div className={`header1-thq-header1-elm ${props.rootClassName} `}>
      <div className="header1-container">
        <img alt="image" src="/batblanco-200h.png" className="header1-image" />
        <div className="header1-thq-nav-elm">
          <Link to="/" className="header1-thq-text-elm1">
            Home
          </Link>
          <Link to="/desafios" className="header1-thq-text-elm2">
            Desafios
          </Link>
          <Link to="/tpi" className="header1-thq-text-elm3">
            TPI
          </Link>
          <a href="#idMapas" className="header1-thq-text-elm4">
            Mapas Conceptuales
          </a>
        </div>
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
