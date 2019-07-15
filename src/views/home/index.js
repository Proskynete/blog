import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'Components/header/';
import Coffee from 'Components/coffee/';
import Footer from 'Components/footer/';
import Line from 'Components/line/';
import LinkWeb from 'Components/linkweb/';
import './index.scss';

const Home = () => (
  <main className="home-page">
    <Header />
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="content-page col col-md-5">
          <div className="container">
            <h1 className="container__title">
              Quien soy en 20 segundos
              <span className="container__title__subtitle">... tal vez un poco menos</span>
            </h1>
            <p className="container__content">
              Soy estudiante de ingeniería en computación e informática en la
              {' '}
              <LinkWeb link="https://www.unab.cl/" title="UNAB" />
              , desarrollador web (Web UI) en la empresa
              {' '}
              <LinkWeb link="http://www.globant.com" title="Globant" />
              . Apasionado por las tecnologías web. Me creé este sitio porque busco poder compartir el
              {' '}
              conocimiento que he adquirido a lo largo de todo este tiempo.
            </p>
          </div>
          <Line />
          <div className="container">
            <h1 className="container__title">
              Quien soy en 5 minutos
              <span className="container__title__subtitle">... tal vez un poco más</span>
            </h1>
            <p className="container__content">
              Puedes leer más en la página:
              {' '}
              <Link className="container__content__link" to="/quien-soy">Quien soy</Link>
              . También puedes revisar mi
              {' '}
              <LinkWeb link="http://curriculum.eduardoalvarez.cl/" title="Curriculum" />
              .
            </p>
          </div>
          <Line />
          <div className="container">
            <h1 className="container__title">
              En que estoy ahora?
              <span className="container__title__subtitle">Lo mas actualizado</span>
            </h1>
            <p className="container__content">
              Te recomiendo que visites
              {' '}
              <Link className="container__content__link" to="/now">Now</Link>
              {' '}
              para que sepas más a detalle que es en lo que estoy metido.
            </p>
          </div>
          <Line />
          <div className="container">
            <h1 className="container__title">
              Quieres que hablemos?
              <span className="container__title__subtitle">Aprendamos juntos!</span>
            </h1>
            <p className="container__content">
              Puedes contactarme en
              {' '}
              <LinkWeb link="https://mobile.twitter.com/proskynete" title="Twitter" />
              {' '}
              y te prometo que trataré de responderte lo más rápido posible o, si gustas,
              {' '}
              también puedes mandarme un correo al mail
              {' '}
              <LinkWeb link="mailto:soy@eduardoalvarez.cl" title="soy@eduardoalvarez.cl" />
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
  </main>
);

export default Home;
