import React from 'react'

import { Helmet } from 'react-helmet'

import Header1 from '../components/header1'
import Footer from '../components/footer'
import './tpi.css'

const TPI = (props) => {
  return (
    <div className="tpi-container1">
      <div className="tpi-thq-desktop-elm">
        <div className="tpi-thq-featurecards1-elm">
          <Header1 rootClassName="header1root-class-name1"></Header1>
          <span className="tpi-thq-text-elm1">Trabajo Práctico Integrador</span>
          <span className="tpi-thq-text-elm2">Proximamente</span>
        </div>
        <Footer rootClassName="footerroot-class-name1"></Footer>
      </div>
    </div>
  )
}

export default TPI
