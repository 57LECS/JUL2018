import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ChooseSportScreen from './Screens/chooseSportScreen';
import HomeScreen from './Screens/homeScreen';
import ResultScreen from './Screens/resultScreen';
import error from './Screens/Error';
import Navigation from './Screens/Navigation';
import TeamScreen from './Screens/teamScreen';
import CalendarScreen from './Screens/calendarScreen';
import CourtScreen from './Screens/courtScreen';
import Footer from './Screens/Footer';
import './index.css';
import './lasallistas.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <br />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/sports" component={ChooseSportScreen} />
            <Route path="/results" component={ResultScreen} />
            <Route path="/teams" component={TeamScreen} />
            <Route path="/calendar" component={CalendarScreen} />
            <Route path="/court" component={CourtScreen} />
            <Route component={error} />
          </Switch>
        </BrowserRouter>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
