import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
