import React, { Component } from 'react';
import Map from './components/Map.js';
import Sidebar from './components/Sidebar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map
        center= {{ lat: 41.3851, lng: 2.1734 }}/>
        <Sidebar />
      </div>
    );
  }
}

export default App;
