import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LightingError from './views/lighting-error'
import BedroomError from './views/bedroom-error'
import EnergyEfficiencyOnError from './views/energy-efficiency-on-error'
import LightOn from './views/light-on'
import Home from './views/home'
import EnergyEfficiencyError from './views/energy-efficiency-error'
import Lighting from './views/lighting'
import Light1Error from './views/light-1-error'
import EnergyEfficiency from './views/energy-efficiency'
import HomeError from './views/home-error'
import Login from './views/login'
import EnergyEfficiencyOn from './views/energy-efficiency-on'
import Bedroom from './views/bedroom'
import Light1 from './views/light1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={LightingError} exact path="/lighting-error" />
        <Route component={BedroomError} exact path="/bedroom-error" />
        <Route
          component={EnergyEfficiencyOnError}
          exact
          path="/energy-efficiency-on-error"
        />
        <Route component={LightOn} exact path="/light-on" />
        <Route component={Home} exact path="/home" />
        <Route
          component={EnergyEfficiencyError}
          exact
          path="/energy-efficiency-error"
        />
        <Route component={Lighting} exact path="/lighting" />
        <Route component={Light1Error} exact path="/light-1-error" />
        <Route component={EnergyEfficiency} exact path="/energy-efficiency" />
        <Route component={HomeError} exact path="/home-error" />
        <Route component={Login} exact path="/" />
        <Route
          component={EnergyEfficiencyOn}
          exact
          path="/energy-efficiency-on"
        />
        <Route component={Bedroom} exact path="/bedroom" />
        <Route component={Light1} exact path="/light1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
