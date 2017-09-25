import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main role="main">
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route component={HomePage} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
