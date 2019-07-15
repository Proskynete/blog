import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'Components/header/';
import Coffee from 'Components/coffee/';
import Footer from 'Components/footer/';
import LinkWeb from 'Components/linkweb/';
import Highlighted from 'Components/highlighted/';
import Line from 'Components/line/';
import './index.scss';

const Now = () => (
  <React.Fragment>
    <Header />
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="col col-md-5">
          <div className="container">
            <h1 className="container__title">Por qué now?</h1>
            <p className="container__content">
              Una día estaba revisando el sitio web de
              {' '}
              <LinkWeb link="https://carlosazaustre.es/" title="Carlos Azaustre" />
              {' '}
              y me dí cuenta que tenía una sección en donde publica
              {' '}
              todo lo que esta haciendo y de manera actualizada y que, a su vez, mencionaba a
              {' '}
              <Highlighted content="Derek Sivers" />
              {' '}
              y la iniciativa
              {' '}
              <LinkWeb link="https://nownownow.com/about" title="Now" />
              {' '}
              que está llevando a cabo. Ésto fue lo que llamo mi atención.
            </p>
          </div>
          <Line />
          <div className="container">
            <h1 className="container__title">
              Now!
              <span className="container__title__subtitle">Última actualización: 13 de Mayo, 2019</span>
            </h1>
            <p className="container__content">
              <span className="container__content__question">Donde vivo?</span>
              Santiago de Chile. Santiago centro.
            </p>
            <p className="container__content">
              <span className="container__content__question">Cuantos años tengo?</span>
              Tengo 25 años.
            </p>
            <p className="container__content">
              <span className="container__content__question">Estudiando</span>
              Me encuentro estudiando Ingeniería en Computación e Informática en la universidad
              {' '}
              <LinkWeb link="https://www.unab.cl/" title="Andres Bello (UNAB)" />
              .
            </p>
            <p className="container__content">
              <span className="container__content__question">Donde trabajo?</span>
              Soy
              {' '}
              <Highlighted content="Web UI SSr" />
              {' '}
              en la empresa
              {' '}
              <LinkWeb link="http://www.globant.com" title="Globant" />
              .
            </p>
            <p className="container__content">
              <span className="container__content__question">Que juego estoy jugando?</span>
              Silver I en el juego
              {' '}
              <LinkWeb link="http://www.leagueoflegends.com" title="League of legends" />
              , servidor de LAS. Nombre de invocador
              {' '}
              <Highlighted content="Proskynete" />
              .
            </p>
            <p className="container__content">
              <span className="container__content__question">Algo que haya realizado hace poco y que me llene de felicidad</span>
              Dicté mi primera charla sobre las tecnologías
              {' '}
              <Highlighted content="React/Redux" />
              {' '}
              para las chicas de
              {' '}
              <LinkWeb link="http://www.laboratoria.com" title="Laboratoria Chile" />
              .
            </p>
            <p className="container__content">
              <span className="container__content__question">Alguna nueva tecnología?</span>
              Estoy estudiando
              {' '}
              <Highlighted content="React-Native" />
              .
            </p>
            <p className="container__content">
              <span className="container__content__question">Que estoy leyendo?</span>
              Estoy leyendo
              {' '}
              <Highlighted content="HTML 5 - Notes for professionals" />
              .
            </p>
            <p className="container__content">
              <span className="container__content__question">Que es lo que estoy desarrollando?</span>
              Actualmente me encuentro generando contenido para la sección
              {' '}
              <Link className="container__content__link" to="/blog">Blog</Link>
              {' '}
              de mi sitio web.
            </p>
            <p className="container__content">
              <span className="container__content__question">Algúna librería?</span>
              Acabo de desarrollar la libreria
              {' '}
              <LinkWeb link="https://www.npmjs.com/package/vertical-timeline-component-react" title="vertical-timeline-component-react" />
            </p>
          </div>
          <Line />
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-12">
          {/* <Coffee /> */}
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  </React.Fragment>
);

export default Now;
