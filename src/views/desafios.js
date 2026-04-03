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
      <a href="https://play.teleporthq.io/signup" className="desafios-link">
        <div aria-label="Sign up to TeleportHQ" className="desafios-container4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="desafios-icon3"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="desafios-text4">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Desafios
