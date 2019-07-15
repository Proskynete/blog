import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'Components/header/';
import Coffee from 'Components/coffee/';
import Footer from 'Components/footer/';
import LinkWeb from 'Components/linkweb/';
import Highlighted from 'Components/highlighted/';
import Line from 'Components/line/';
import './index.scss';

const WhoIAm = () => (
  <main className="whoiam-page">
    <Header />
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="content-page col col-md-5">
          <div className="container">
            <h1 className="container__title">
              Quien soy
              <span className="container__title__subtitle">A human, not machine</span>
            </h1>
            <p className="container__content">
              Hola!!! Mi nombre es
              {' '}
              <Highlighted content="Eduardo Esteban Álvarez Castañeda" />
              {' '}
              y soy nivel 25 en este juego llamado vida. Nacido y criado en Santiago de Chile
              {' '}
              (lugar donde sigo viviendo). Hijo mayor de
              {' '}
              <Highlighted content="Eduardo Álvarez Dubles" />
              {' '}
              (super original mi papá) y
              {' '}
              <Highlighted content="Janett Castañeda González" />
              . Un día Viernes, cuando recien partía el día 24 de Diciembre del
              {' '}
              año 1993 fue cuando dije mi primer
              {' '}
              <Highlighted content="Hola Mundo" />
              .
            </p>
            <p className="container__content">
              Actualmente me encuentro trabajando para
              {' '}
              <LinkWeb link="http://www.globant.com" title="Globant" />
              {' '}
              como
              {' '}
              <Highlighted content="Desarrollador Web Ssr" />
              . En las tardes me voy a la universidad para estudiar
              {' '}
              <Highlighted content="Ingeniería en computación e informática" />
              {' '}
              y los fines de semana (o cuando encuentro un tiempo libre) me dedico
              {' '}
              a hacer contenido para mi blog.
            </p>
            <p className="container__content">
              Por si quieres saber más a detalle en lo que estoy actualmente, visita
              {' '}
              <Link className="container__content__link" to="/now">éste link</Link>
              .
            </p>
          </div>
          <Line />
          <div className="container">
            <h1 className="container__title">
              Como inicié?
              <span className="container__title__subtitle">Mi segundo Hola Mundo</span>
            </h1>
            <p className="container__content">
              Desde que tengo memoria, recuerdo que siempre me llamó la atención la computación
              {' '}
              y desde pequeño quise aprender como es que funcionaba por dentro.
            </p>
            <p className="container__content">
              Cuando estaba entrando a la enseñanza media
              {' '}
              <Highlighted content="(2007)" />
              {' '}
              me hice amigo de
              {' '}
              <LinkWeb link="https://twitter.com/m_mrk2" title="Marcelo Mercado" />
              {' '}
              quien estaba entrando a primer año de Ing. en informática.
              {' '}
              En ese tiempo fue cuando él empezo a hacer trabajos de desarrollo de sitios web con
              {' '}
              <LinkWeb link="https://www.joomla.org/" title="Joomla" />
              {' '}
              mientras que por mi parte estaba estudiando
              {' '}
              <Highlighted content="HTML5" />
              ,
              {' '}
              <Highlighted content="CSS3" />
              {' '}
              y
              {' '}
              <Highlighted content="JS" />
              {' '}
              con
              {' '}
              <LinkWeb link="https://codigofacilito.com/" title="CódigoFacilito" />
              .
            </p>
            <p className="container__content">
              En el
              {' '}
              <Highlighted content="2012" />
              {' '}
              entré a la universidad Iberoamericana de Ciencias y Tecnología para estudiar
              {' '}
              Ingeniería Civil en Computación e Informática
              {' '}
              <Highlighted content="(UIBERO)" />
              {' '}
              la cual no pude terminar gracias a que dicha universidad cerró.
              {' '}
              En esos mismos años, ya estaba haciendo trabajos como freelance los cuales
              {' '}
              mantengo hasta el día de hoy.
            </p>
          </div>
          <Line />
          <div className="container">
            <h1 className="container__title">
              Primer trabajo
              <span className="container__title__subtitle">Tercer Hola Mundo</span>
            </h1>
            <p className="container__content">
              Una vez que salí de la UIBERO me puse a trabajar como electricista mientras
              {' '}
              seguía estudiando tecnologías web, pero esta vez no solamente con
              {' '}
              <Highlighted content="Código Facilito" />
              {' '}
              si no que también con
              {' '}
              <LinkWeb link="https://platzi.com/" title="Platzi" />
              , hasta que llegó el día en que recibí carta de aviso (me estaban informando que me
              {' '}
              iban a despedir en 30 días más). En ese momento no tomé la decisión de que no queria
              {' '}
              seguir trabajando en nada que no fuese programación, pero no tenía ni título ni
              {' '}
              portafolio donde mostrar mis conocimientos. Así fué como rendí unos examenes en
              {' '}
              <Highlighted content="Platzi" />
              {' '}
              los cuales eran:
              {' '}
              <Highlighted content="Programación Básica" />
              ,
              {' '}
              <Highlighted content="JavaScript y jQuery" />
              ,
              {' '}
              <Highlighted content="Responsive Design" />
              ,
              {' '}
              <Highlighted content="Git y Github" />
              {' '}
              y
              {' '}
              <Highlighted content="HTML5 y CSS3" />
              . Con esos certificados me puse a buscar trabajo como desarrollador y en menos
              {' '}
              de los 30 días ya habia encontrado uno como
              {' '}
              <Highlighted content="Ayudante desarrollador web" />
              {' '}
              en una startup llamada
              {' '}
              <Highlighted content="Quierosushi" />
              {' '}
              trabajando con tecnlogías como PHP con su framework Codeigniter,
              {' '}
              jQuery y Bootstrap 3.3.7.
            </p>
          </div>
          <Line />
          <div className="container">
            <h1 className="container__title">
              Mi primer despido
              <span className="container__title__subtitle">Algo traumante</span>
            </h1>
            <p className="container__content">
              Un día viernes, fin de mes (Octubre 2016), luego de hacer mis tareas programadas para
              {' '}
              ese día, se acerca el jefe del área de desarrollo y me informa que estoy desvinculado de
              {' '}
              la empresa, ni más ni menos. Llevaba 11 meses trabajando cuando me hacen firmar la
              {' '}
              carta. La manera en la que sucedieron las cosas, fue un tanto traumante ya que a pesar
              {' '}
              de que sentia que podía suceder, nunca pensé que fuese tan abrupto y repentino.
            </p>
            <p className="container__content">
              Luego de estar buscando trabajo, por dos semanas, logré entrar en
              {' '}
              <LinkWeb link="https://www.cardumen.cl/" title="Cardumen" />
              {' '}
              trabajando para el cliente
              {' '}
              <LinkWeb link="https://simple.ripley.cl/" title="Ripley" />
              . Entré como
              {' '}
              <Highlighted content="Desarrollador FullStack" />
            </p>
          </div>
          <Line />
          <div className="container">
            <h1 className="container__title">
              Como entré a globant
              <span className="container__title__subtitle">Bendito LinkedIn</span>
            </h1>
            <p className="container__content">
              Cuando llevaba al rededor de 4 meses trabajando para
              {' '}
              <Highlighted content="Cardumen" />
              , recibí un correo de una
              {' '}
              <Highlighted content="recruiting" />
              {' '}
              por parte de
              {' '}
              <LinkWeb link="https://www.globant.com/" title="Globant" />
              {' '}
              la cual mencionaba que estaban buscando profesionales para sumar
              {' '}
              al equipo y que habían visto mi perfil en
              {' '}
              <LinkWeb link="www.linkedin.com/in/eduardoalvarezc" title="LinkedIn" />
              . En ese momento inicié el proceso para ingresar a la empresa, el cual
              {' '}
              duró bastante tiempo, pero luego de un par de entrevistas, pude entrar
              {' '}
              en Junio del 2017 (yeeeeeyyy!!).
            </p>
            <p className="container__content">
              Hoy en día sigo trabajando para la misma empresa, buscando seguir aprendiendo
              {' '}
              de esta carrera que tanto me gusta, junto a grandes profesionales de la induatria.
            </p>
          </div>
          <Line />
          <div className="container">
            <h1 className="container__title">
              Solo programación?
              <span className="container__title__subtitle">... la verdad es que no</span>
            </h1>
            <p className="container__content">
              A pesar de que disfruto el programar y aprender de nuevas tecnologías,
              {' '}
              también me gustan otras cosas como por ejemplo: Jugar videojuegos, tocar
              {' '}
              instrumentos de cuerda (tengo un teclado, una guitarra eléctrica y dos
              {' '}
              guitarras electroacústicas), ver anime y dibujos animados infantiles.
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

export default WhoIAm;
