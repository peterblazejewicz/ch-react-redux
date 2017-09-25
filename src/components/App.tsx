import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { AboutPage, CoursesPage, Footer, Header, HomePage } from './';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main role="main">
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
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
