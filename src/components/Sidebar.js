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
								onClick={() => {this.props.updateCenter(place)}}
								onKeyPress={(e) => {
									e.preventDefault();
									if (e.key === "Enter") {
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