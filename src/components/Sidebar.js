import React, { Component } from 'react';
import SearchBox from './SearchBox';

class Sidebar extends Component {
	render () {
		return (
			<div id="breadcrumb" className="Sidebar">
				<h2>Neighborhood Map</h2>
				<SearchBox
				updateCurrentLoc= {this.props.updateCurrentLoc}/>
				<ul className="venuesList">
					{
						this.props.venues.map((place, index) => {
							return <li onClick={() => {this.props.updateCenter(place)}}>{place.name}</li>
						})
					}
				</ul>

			</div>
			);
	}
}

export default Sidebar;