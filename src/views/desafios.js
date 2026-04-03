import React from 'react'

import { Helmet } from 'react-helmet'

import Header1 from '../components/header1'
import Footer from '../components/footer'
import './desafios.css'

const Desafios = (props) => {
  return (
    <div className="desafios-container1">
      <Helmet>
        <title>Desafios - BAT</title>
        <meta property="og:title" content="Desafios - exported project" />
        <link
          rel="canonical"
          href="https://untitled-wvmfle.teleporthq.app/desafios"
        />
        <meta
          property="og:url"
          content="https://untitled-wvmfle.teleporthq.app/desafios"
        />
      </Helmet>
      <div className="desafios-thq-desktop-elm">
        <div className="desafios-thq-featurecards1-elm">
          <Header1 rootClassName="header1root-class-name"></Header1>
          <span className="desafios-thq-text-elm10">Desafíos</span>
          <div className="desafios-container2">
            <div data-thq="accordion" className="desafios-accordion">
              <details
                open
                data-thq="accordion-trigger"
                className="desafios-thq-trigger-elm"
              >
                <summary
                  data-thq="accordion-summary"
                  className="desafios-thq-summary-elm"
                >
                  <span className="desafios-text1">Desafío 3</span>
                  <div
                    data-thq="accordion-icon"
                    className="desafios-thq-icon-container-elm"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="desafios-container3">
                  <div className="desafios-thq-card3-elm">
                    <div className="desafios-thq-text-elm11">
                      <span className="desafios-thq-text-elm12">Solución</span>
                      <span className="desafios-thq-text-elm13">
                        Call out a feature, benefit, or value that can stand on
                        its own.
                      </span>
                    </div>
                    <div className="desafios-thq-text-elm14">
                      <span className="desafios-thq-text-elm15">
                        Herramientas
                      </span>
                      <span className="desafios-thq-text-elm16">
                        Call out a feature, benefit, or value that can stand on
                        its own.
                      </span>
                    </div>
                    <div className="desafios-thq-text-elm17">
                      <span className="desafios-thq-text-elm18">
                        Problema abordado
                      </span>
                      <span className="desafios-thq-text-elm19">
                        Call out a feature, benefit, or value that can stand on
                        its own.
                      </span>
                    </div>
                    <div className="desafios-thq-text-elm20">
                      <span className="desafios-thq-text-elm21">
                        Evidencias
                      </span>
                      <span className="desafios-thq-text-elm22">
                        <span>
                          Google Doc:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>Presentation:</span>
                        <br></br>
                        <span>
                          Video:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="desafios-thq-text-elm26">
                    <span className="desafios-thq-text-elm27">
                      Reflexión de equipo
                    </span>
                    <span className="desafios-thq-text-elm28">
                      Call out a feature, benefit, or value that can stand on
                      its own. Call out a feature, benefit, or value that can
                      stand on its own.Call out a feature, benefit, or value
                      that can stand on its own.Call out a feature, benefit, or
                      value that can stand on its own.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footerroot-class-name"></Footer>
      </div>
    </div>
  )
}

export default Desafios
