import React from 'react';

import './index.scss';

import Description from './views/Description/';
import Posts from './views/Posts/';

const App = () =>
  (<div className="row">
    <div className="col-12 col-md-3">
      <Description />
    </div>
    <div className="col-12 col-md-9">
      <Posts />
    </div>
  </div>);

export default App;
