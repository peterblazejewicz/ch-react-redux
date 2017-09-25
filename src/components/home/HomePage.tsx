import React, { SFC } from 'react';
import { Link } from 'react-router-dom';

const HomePage: SFC = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router in ES6 for ultra-responsive web app.</p>
    <Link className="bnt btn-primary bnt-lg" to="home">
      Learn more
    </Link>
  </div>
);
export default HomePage;
