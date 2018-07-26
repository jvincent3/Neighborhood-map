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
		zoom: 3,
	}

	setStateAsync = (state) => {
		this.venueFocusLoad(state.venues);
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

	venueFocusLoad = (venues) => {
		const focusedVenues = [];

		venues.map((val, index) => {
			focusedVenues.push({
				loc: {lat: val.location.lat, lng: val.location.lng},
				focused: false})
		})

		this.setState({
			focusedVenues
		})

	}

	updateVenueFocus = (currentLoc) => {
		const focusedVenues = this.state.focusedVenues
		focusedVenues.map(val => {
			if (val.loc.lat === currentLoc.lat && val.loc.lng === currentLoc.lng) {

				val.focused = true;

			} else if (!val.loc.lat === currentLoc.lat && !val.loc.lng === currentLoc.lng) {
				val.focused = false;
				
			}
		})
		console.log(focusedVenues)
		this.setState({focusedVenues})
	}





  render() {
    return (
      <div className="App">
				<div id="map-container">
				<MediaQuery minDeviceWidth={800}>
	        <Map
	        center= { this.state.currentLocation }
	        venues= {this.state.venues}
	        focusedVenues={this.state.focusedVenues}
	        id="map"
	        zoom={this.state.zoom}
	        currentLocation={this.state.currentLocation}
	        containerElement={<div style={{height: `100vh`}} />}
	        mapElement= {<div style={{height: `100%`}} />}
	        />
	      </MediaQuery>
	      <MediaQuery maxDeviceWidth={799}>
					<Map
	        center= { this.state.currentLocation }
	        venues= {this.state.venues}
	        focusedVenues={this.state.focusedVenues}
	        id="map"
	        zoom={this.state.zoom}
	        currentLocation={this.state.currentLocation}
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
        updateFocus={this.updateVenueFocus}
        venues={this.state.venues}
        updateCenter={this.updateCenter}
        />
      </div>
    );
  }
}

export default App;
