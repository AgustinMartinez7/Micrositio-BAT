import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-thq-footer-elm ${props.rootClassName} `}>
      <div className="footer-container1">
        <img alt="image" src="/batblanco-200h.png" className="footer-image" />
        <div className="footer-thq-nav-elm">
          <Link to="/" className="header1-thq-text-elm1">
            Home
          </Link>
          <Link to="/actividades" className="header1-thq-text-elm1"> 
            Actividades
          </Link>
          <Link to="/desafios" className="header1-thq-text-elm1">
            Desafíos
          </Link>
          <Link to="/tpi" className="header1-thq-text-elm1">
            TPI
          </Link>
        </div>
      </div>
      <hr className="footer-separator"></hr>
      <div className="footer-container2">
        <span className="footer-thq-text-elm5">
          © 2026 BAT | Todos los derechos reservados.
        </span>
        <span className="footer-thq-text-elm6">
          <span>
            Diseñado con
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="footer-text2">♥</span>
        </span>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  navTo: {
    url: '',
    newTab: false,
  },
  rootClassName: '',
}

Footer.propTypes = {
  navTo: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Footer
