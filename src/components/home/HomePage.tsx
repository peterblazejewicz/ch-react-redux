import React, { SFC } from 'react';
import { Link } from 'react-router-dom';

const HomePage: SFC = () => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">Pluralsight Administration</h1>
      <p>React, Redux and React Router in ES6 for ultra-responsive web app.</p>
      <Link className="bnt btn-primary btn-lg" to="home">
        Learn more &raquo;
      </Link>
    </div>
  </div>
);
export default HomePage;
