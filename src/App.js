import React, { Component } from 'react';
import ListActivities from './components/ListActivities';
import SingleActivity from './components/SingleActivity';

import ActivityService from './services/ActivityService';
import './css/custom.css';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <ActivityService>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ListActivities} />
          <Route exact path='/:uuid' component={SingleActivity} />
        </Switch>

      </ActivityService>
    );
  }
}

export default App;
