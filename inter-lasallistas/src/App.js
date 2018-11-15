import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ChooseSportScreen from './Screens/chooseSportScreen_teams';
import ChooseSportScreenResults from './Screens/chooseSportScreen_results';
import HomeScreen from './Screens/homeScreen';
import ResultScreen from './Screens/resultScreen';
import error from './Screens/Error';
import Navigation from './Screens/Navigation';
import TeamScreen from './Screens/teamScreen';
import CalendarScreen from './Screens/calendarScreen';
import CourtScreen from './Screens/courtScreen';
import CalendarMenuScreen from './Screens/calendarMenuScreen';
import EventScreen from './Screens/eventScreenMenu';
import Footer from './Screens/Footer';
import NewTeam from './Components/newTeam';
import LoginScreen from './Screens/login'
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
            <Route path="/" component={EventScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/home" component={HomeScreen} exact />
            <Route path="/sports/teams" component={ChooseSportScreen} />
            <Route path="/sports/results" component={ChooseSportScreenResults} />
            <Route path="/results" component={ResultScreen} />
            <Route path="/teams/conf" component={TeamScreen} />
            <Route path="/calendar/get" component={CalendarScreen} />
            <Route path="/court" component={CourtScreen} />
            <Route path="/calendar" component={CalendarMenuScreen} />
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
