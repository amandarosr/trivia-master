import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game'; 
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="fullpage">
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/game" component={ Game } />
          <Route path="/ranking" component={ Ranking } />
          <Route path="/feedback" component={ Feedback } />
        </Switch>
      </div>
    );
  }
}

export default App;
