import React, { Component } from 'react';

class Sidebar extends Component {
	render () {
		return (
			<div id="breadcrumb" className="Sidebar">
				<ul className="venuesList">
					{
						this.props.venues.map((place, index) => {
							return <li key={index} onClick={() => {this.props.updateCenter(place)}}>{place.name}</li>
						})
					}
				</ul>

			</div>
			);
	}
}

export default Sidebar;