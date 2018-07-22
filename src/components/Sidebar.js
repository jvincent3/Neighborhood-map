import React, { Component } from 'react';

class Sidebar extends Component {
	render () {
		return (
			<div id="breadcrumb" className="Sidebar">
				<ul className="venuesList" aria-labelledby="breadcrumb">
					{
						this.props.venues.map((place, index) => {
							return <li
								tabindex={index}
								key={index}
								role="button"
								onClick={() => {this.props.updateCenter(place)}}
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