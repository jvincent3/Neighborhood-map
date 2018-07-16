import React, { Component } from 'react';
import Map from './components/Map.js';
import Sidebar from './components/Sidebar.js';
import request from 'request';
import './App.css';

class App extends Component {

	state = {
		currentLocation: {lat: 41.3851, lng: 2.1734},
		venues: [],
		zoom: 2
	}

	updateCurrentLoc = (currentLocation) => {
		request({
		  url: 'https://api.foursquare.com/v2/venues/search',
		  method: 'GET',
		  qs: 	{
		    client_id: 'KS1YNFPQSMDAF4UGOGB5XJ4WU0YSDMCJRY2EAVZMFNDYNKI4',
		    client_secret: 'NY5VL4R4CQXVHND1W0QSBWVJN3UZZFRUIZMWZECYMEP20MS5',
		    ll: `${currentLocation.lat},${currentLocation.lng}`,
		    query: 'donut',
		    v: '20180323',
		    limit: 10,
		    sortByDistance: 1
		  }
		}, (err, res, body) => {
			const data = JSON.parse(body);
			if (Object.keys(data.response).length > 0) {
					this.setState({
						currentLocation,
						venues: data.response.venues,
						zoom: 14
					})
			} else {
				alert("The place you're current searching doesn't exist");
			}
		});
	}

  render() {
    return (
      <div className="App">
				<div id="map-container">
	        <Map
	        center= { this.state.currentLocation }
	        markers= {this.state.venues}
	        id="map"
	        zoom={this.state.zoom}
	        containerElement={<div style={{height: `100vh`}} />}
	        mapElement= {<div style={{height: `100%`}} />}
	        />
        </div>
        <Sidebar
        updateCurrentLoc = {this.updateCurrentLoc}
        />
      </div>
    );
  }
}

export default App;
