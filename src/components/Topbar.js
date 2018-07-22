import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Venuecategory from './Venuecategory';

class Topbar extends Component {
	render() {
		return (
			<div className="Topbar">
				<h2>Neighborhood Map</h2>
				<SearchBox
				updateCurrentLoc={this.props.updateCurrentLoc}
				/>
				<Venuecategory
				updateCurrentLoc={this.props.updateCurrentLoc}
				currentLocation={this.props.currentLocation}/>
			</div>
			)
	}
}

export default Topbar;