import React, { Component } from 'react';
import './App.styles.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../homepage/HomePage.component';


/**
 * Class for the App component
 */
class App extends Component {
  /**
 * @description - Render function
 * @returns {JSX} - App component
 */
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
