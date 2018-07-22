import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Map from './components/Map.js';
import * as FourSquareAPI from './api/FourSquareAPI';
import Sidebar from './components/Sidebar.js';
import Topbar from './components/Topbar.js'
import './App.css';

class App extends Component {

	state = {
		currentLocation: {lat: 41.3851, lng: 2.1734},
		venues: [],
		zoom: 3
	}

	setStateAsync = (state) => {
		return new Promise((resolve) => {
			this.setState(state, resolve)
		});
	}

	updateCurrentLoc = async (currentLocation, query) => {
		const reqVenues = await FourSquareAPI.getData(currentLocation, query);
		await this.setStateAsync(
			{
				currentLocation,
				venues: reqVenues,
				zoom: 10
			}
		);
	}

	updateCenter = (venue) => {
		this.setState({
			currentLocation: {lat: venue.location.lat, lng: venue.location.lng},
			zoom: 18
		})
	}

  render() {
    return (
      <div className="App">
				<div id="map-container">
				<MediaQuery minDeviceWidth={800}>
	        <Map
	        center= { this.state.currentLocation }
	        venues= {this.state.venues}
	        id="map"
	        zoom={this.state.zoom}
	        containerElement={<div style={{height: `100vh`}} />}
	        mapElement= {<div style={{height: `100%`}} />}
	        />
	      </MediaQuery>
	      <MediaQuery maxDeviceWidth={799}>
					<Map
	        center= { this.state.currentLocation }
	        venues= {this.state.venues}
	        id="map"
	        zoom={this.state.zoom}
	        containerElement={<div style={{height: `300px`}} />}
	        mapElement= {<div style={{height: `100%`}} />}
	        />
	      </MediaQuery>
        </div>
        <Topbar
				updateCurrentLoc = {this.updateCurrentLoc}
				currentLocation={this.state.currentLocation}
        />
        <Sidebar
        venues={this.state.venues}
        updateCenter={this.updateCenter}
        />
      </div>
    );
  }
}

export default App;
