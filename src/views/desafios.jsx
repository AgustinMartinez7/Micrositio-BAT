import Header1 from '../components/header1'
import Footer from '../components/footer'
import './desafios.css'
import { motion } from 'motion/react'

const Desafios = (props) => {
  return (
    <div className="desafios-container1">
      <div className="desafios-thq-desktop-elm">
        <div className="desafios-thq-featurecards1-elm">
          <Header1 rootClassName="header1root-class-name"></Header1>
          <motion.span 
            className="desafios-thq-text-elm10"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut", y: { type: "spring", visualDuration: 0.4, bounce: 0.4 } }}>
              Desafíos
          </motion.span>
          <div className="desafios-container2">
            <motion.div data-thq="accordion" className="desafios-accordion"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut", y: { type: "spring", visualDuration: 0.4, bounce: 0.4 } }}>
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
            </motion.div>
          </div>
        </div>
        <Footer rootClassName="footerroot-class-name"></Footer>
      </div>
    </div>
  )
}

export default Desafios
