import React, { Component } from 'react';
import './App.css';

import RouteAll from './common/RouteAll';
import ButtonAppBar from './common/NavigationBar';




export default class App extends Component {
  render() {
    return (
      <div>
      <ButtonAppBar/>
      <RouteAll/>
      </div>
    );
  }
}
