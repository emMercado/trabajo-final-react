import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import PointsView  from './views/points/PointsView';
import { NavBar } from './components/common/NavBar';

class App extends Component {
  
  render(){
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/points" component={PointsView} />
        </Switch>  
      </>
    )
  }
}

export default App;
