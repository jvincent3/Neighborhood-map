import React, { Component } from 'react';

class Sidebar extends Component {
	render () {
		return (
			<div id="breadcrumb" className="Sidebar">
				<ul className="venuesList" aria-labelledby="breadcrumb">
					{
						this.props.venues.map((place, index) => {
							return <li
								tabIndex={index}
								key={index}
								role="button"
								onClick={() => {
									const location = {lat: place.location.lat, lng: place.location.lng}
									this.props.updateCenter(place)
									setTimeout(() => {this.props.updateFocus(location)}, 300)
								}}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										this.props.updateCenter(place);
									}
								}
							}>{place.name}</li>
						})
					}
				</ul>

			</div>
			);
	}
}

export default Sidebar;