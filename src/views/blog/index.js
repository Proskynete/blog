import React from 'react';
import Header from 'Components/header/';
import Coffee from 'Components/coffee/';
import Footer from 'Components/footer/';
import Line from 'Components/line/';
import './index.scss';

const Blog = () => (
  <div className="container-fluid">
    <div className="row justify-content-md-center">
      <div className="col-12">
        <Header />
      </div>
      <div className="col col-md-7">
        <div className="container">
          <h1 className="container__title">Blog</h1>
          <p className="container__content">
                        Esta sección esta en desarrollo... Próximamente habrá contenido de interes.
          </p>
        </div>
        <Line />
      </div>
    </div>
    <div className="row justify-content-md-center">
      <div className="col-12">
        <Coffee>
                    Author
        </Coffee>
      </div>
    </div>
    <div className="row">
      <Footer />
    </div>
  </div>
);

export default Blog;
