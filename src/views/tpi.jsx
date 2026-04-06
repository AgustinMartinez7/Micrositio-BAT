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
          <motion.span
            className='tpi-thq-text-elm2'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              y: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
            }}
          >
            Proximamente
          </motion.span>
        </div>
        <Footer rootClassName='footerroot-class-name1'></Footer>
      </div>
    </div>
  );
};

export default TPI;
