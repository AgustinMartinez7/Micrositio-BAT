import Header1 from '../components/header1';
import Footer from '../components/footer';
import './tpi.css';
import { motion } from 'motion/react';

const TPI = (props) => {
  return (
    <div className='tpi-container1'>
      <div className='tpi-thq-desktop-elm'>
        <div className='tpi-thq-featurecards1-elm'>
          <Header1 rootClassName='header1root-class-name1'></Header1>
          <motion.span
            className='tpi-thq-text-elm1'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              y: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
            }}
          >
            Trabajo Práctico Integrador
          </motion.span>
          <motion.div
            className='tpi-card'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut', y: { type: 'spring', visualDuration: 0.4, bounce: 0.4 } }}
          >
            <h2 className='tpi-subtitulo'>Ana Pina</h2>
            <p className='tpi-descripcion'>
              Es una empresa dedicada a la comercialización de muebles, blanquería y artículos de bazar. Además, ofrece servicios de asesoramiento en decoración para hogares e instituciones, brindando soluciones integrales adaptadas a las necesidades de cada cliente.
            </p>
            <div className='tpi-botones-container'>
              <a
                href="https://docs.google.com/document/d/1hvsuPxgHRUuP-RjxQxOLKsNIgjeUuiLDyQjR94p6lWw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="tpi-boton"
              >
                Diagnóstico Organizacional
              </a>
              <a
                href="https://docs.google.com/document/d/1KtEiWTKrLXWb9NpnhkvXSO1D_06BP95TnV53A750oe0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="tpi-boton"
              >
                Plan de Trabajo
              </a>
            </div>
          </motion.div>
        </div>
        <Footer rootClassName='footerroot-class-name1'></Footer>
      </div>
    </div>
  );
};

export default TPI;
