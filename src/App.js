import React, { Component } from 'react';
import Map from './components/Map.js';
import Sidebar from './components/Sidebar.js';
import './App.css';

class App extends Component {

	state = {
		currentLocation: {lat: 41.3851, lng: 2.1734}
	}

  render() {
    return (
      <div className="App">
				<div id="map-container">
	        <Map
	        center= { this.state.currentLocation}
	        id="map"
	        containerElement={<div style={{height: `100vh`}} />}
	        mapElement= {<div style={{height: `100%`}} />}
	        />
        </div>
        <Sidebar
        />
      </div>
    );
  }
}

export default App;
