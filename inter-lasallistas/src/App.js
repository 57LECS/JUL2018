import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ChooseSportScreen from './Screens/chooseSportScreen';
import HomeScreen from './Screens/homeScreen';
import ResultScreen from './Screens/resultScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/sports" component={ChooseSportScreen} />
          <Route path="/results" component={ResultScreen} />
          <Route component={Error} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
