import React from 'react';

import './Footer.css';


function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
         
        
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            <table>
            <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">Guillermo Muhana</a>
      </section>
              <li>Tecnico universitario en programacion</li>
              <br></br>
              <li>Diseñador web</li>
              <br></br>
              <li>Wordpress</li>
              </table>
          </section>
                 
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
           📧: guillemuhana@gmail.com
           <br></br>
           
          </section>
          <section className="footer-info__terms">
            
            <br />
            Porfolio Desarrollado con React js <br></br>
            y Material ui
            <br></br>
            
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
           ☎: +54 3515931676
          </section>
          <section className="footer-info__contact">
          <a href="https://muhanadesign.com/" target="_blank" rel="noopener noreferrer">MuhanaDesign.com</a>
            <br></br>
            <a href="https://www.linkedin.com/in/guillermo-muhana-19989b171/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

            <br />
            <a href="https://muhanadesign.com/contacto/" target="_blank" rel="noopener noreferrer">Contáctame</a>
            <br></br>
            <a href="https://mpago.la/2BA2idS" target="_blank" rel="noopener noreferrer">Descarga el codigo fuente</a>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;