import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Header1 from "../components/header1";
import Footer from "../components/footer";
import "./desktop.css";

const Desktop = (props) => {
  return (
    <div className='desktop-container1'>
      <div className='desktop-thq-desktop-elm'>
        <div className='desktop-thq-hero1-elm'>
          <Header1 rootClassName='header1root-class-name2'></Header1>
          <div className='desktop-thq-text-elm10'>
            <div className='desktop-thq-frame1-elm'>
              <span className='desktop-thq-text-elm11'>Hola,</span>
              <span className='desktop-thq-text-elm12'>somos</span>
              <span className='desktop-thq-text-elm13'>BAT</span>
            </div>
            <img
              alt='image'
              src='/batblanco-500w.png'
              className='desktop-image1'
            />
          </div>
          <iframe
            loading='lazy'
            src='https://www.canva.com/design/DAHF0-atzIA/L06Ltjnnp-f1J9AZPGM_4w/watch?embed&controls=false'
            className='video'
          ></iframe>
        </div>
        <div className='desktop-thq-feature1-elm'>
          <img
            alt='image'
            src='/frame%205-200h.png'
            className='desktop-image2'
          />
          <div className='desktop-thq-frame6-elm1'>
            <span className='desktop-thq-text-elm14'>El Equipo</span>
          </div>
          <div className='desktop-thq-frame3-elm'>
            <div className='desktop-thq-row1-elm1'>
              <div className='desktop-thq-content-elm1'>
                <div className='desktop-thq-text-elm15'>
                  <span className='desktop-thq-text-elm16'>
                    Lopez Gutierrez Daniel Benjamin
                  </span>
                  <span className='desktop-thq-text-elm17'>
                    <span>
                      Mi rol en el equipo es mediar las ideas y garantizar que
                      cada integrante aporte su visión y participe activamente
                      en nuestras actividades. Mis principales fortalezas son la
                      comunicación efectiva y la adaptabilidad a los cambios que
                      puedan surgir.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      Me interesa seguir desarrollando e ir poniendo en práctica
                      mis conocimientos de programación, gestión de proyectos y
                      automatización de procesos.
                    </span>
                  </span>
                </div>
                <Link to="/" className="desktop-thq-text-elm18">
                  Hoja de ruta -&gt;
                </Link>
              </div>
              <img
                alt='Image329'
                src='/perfilben-300h.png'
                className='desktop-thq-image-elm1'
              />
            </div>
            <div className='desktop-thq-row3-elm1'>
              <img
                alt='Image349'
                src='/perfiltomi.png'
                className='desktop-thq-image-elm2'
              />
              <div className='desktop-thq-content-elm2'>
                <div className='desktop-thq-text-elm19'>
                  <span className='desktop-thq-text-elm20'>
                    López Tomás Agustín 
                  </span>
                  <span className='desktop-thq-text-elm21'>
                    Cumplo el rol de llevar las ideas y los objetivos a tareas
                    que podamos realizar. Busco siempre mantener el trabajo
                    organizado y colaborar con todo lo que se necesite.
                    Personalmente, me apasionan el diseño de interfaces y de
                    productos.
                  </span>
                </div>
                <Link to="/" className="desktop-thq-text-elm22">
                  Hoja de ruta -&gt;
                </Link>
              </div>
            </div>
            <div className='desktop-thq-row1-elm2'>
              <div className='desktop-thq-content-elm3'>
                <div className='desktop-thq-text-elm23'>
                  <span className='desktop-thq-text-elm24'>
                    Martinez Agustin Francisco
                  </span>
                  <span className='desktop-thq-text-elm25'>
                    Dentro del equipo, me identifico con el rol de responsable,
                    porque se relaciona con mi manera de trabajar y aportar al
                    grupo. Mis fortalezas son la responsabilidad, organización,
                    resolución de problemas, toma de decisiones y el trabajo en
                    equipo. Además, me interesa seguir creciendo en áreas como
                    el desarrollo de software y la gestión de proyectos.
                  </span>
                </div>
                <Link to="/" className="desktop-thq-text-elm26">
                  Hoja de ruta -&gt;
                </Link>
              </div>
              <img
                alt='image'
                src='/perfilchiki-1500w.png'
                className='desktop-image3'
              />
            </div>
            <div className='desktop-thq-row3-elm2'>
              <img
                alt='Image349'
                src='/perfilbrian-300h.png'
                className='desktop-thq-image-elm3'
              />
              <div className='desktop-thq-content-elm4'>
                <div className='desktop-thq-text-elm27'>
                  <span className='desktop-thq-text-elm28'>Ojeda Brian</span>
                  <span className='desktop-thq-text-elm29'>
                    En el equipo, soy el creativo, constante fuente de nuevas
                    ideas, perspectivas y caminos por probar. Cuando el problema
                    amerita un cambio de enfoque, busco los recursos necesarios
                    para resolverlo.
                  </span>
                </div>
                <Link to="/" className="desktop-thq-text-elm30">
                  Hoja de ruta -&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='desktop-thq-featurecards1-elm'>
          <img
            alt='image'
            src='/frame%205-200h.png'
            className='desktop-image4'
          />
          <div className='desktop-thq-frame6-elm2'>
            <span id='idMapas' className='desktop-thq-text-elm31'>
              Mapas Conceptuales
            </span>
          </div>
          <div className='desktop-thq-frame4-elm'>
            <div className='desktop-thq-card3-elm1'>
              <div className='desktop-thq-body-elm1'>
                <div className='desktop-thq-text-elm32'>
                  <span className='desktop-thq-text-elm33'>
                    Nivel 1 - Operativo
                  </span>
                  <span className='desktop-thq-text-elm34'>
                    Call out a feature, benefit, or value of your site or
                    product that can stand on its own.
                  </span>
                </div>
                <span className='desktop-thq-text-elm35'>
                  Mapa conceptual -&gt;
                </span>
              </div>
            </div>
            <div className='desktop-thq-card3-elm2'>
              <div className='desktop-thq-body-elm2'>
                <div className='desktop-thq-text-elm36'>
                  <span className='desktop-thq-text-elm37'>
                    Nivel 2 - Ejecutivo
                  </span>
                  <span className='desktop-thq-text-elm38'>
                    Call out a feature, benefit, or value of your site or
                    product that can stand on its own.
                  </span>
                </div>
                <span className='desktop-thq-text-elm39'>
                  Mapa conceptual -&gt;
                </span>
              </div>
            </div>
            <div className='desktop-thq-card3-elm3'>
              <div className='desktop-thq-body-elm3'>
                <div className='desktop-thq-text-elm40'>
                  <span className='desktop-thq-text-elm41'>
                    Nivel 3 - Estratégico
                  </span>
                  <span className='desktop-thq-text-elm42'>
                    Call out a feature, benefit, or value of your site or
                    product that can stand on its own.
                  </span>
                </div>
                <span className='desktop-thq-text-elm43'>
                  Mapa conceptual -&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer
          navTo={{
            url: "#idMapas",
            newTab: false,
          }}
        ></Footer>
      </div>
    </div>
  );
};

export default Desktop;
