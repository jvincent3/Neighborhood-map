import React, { Component } from 'react';

class Venuecategory extends Component {
	render() {
		return(
			<input
			onKeyPress={(e) => {
				const location = this.props.currentLocation
				if (e.key === "Enter") {
					this.props.updateCurrentLoc(location, e.target.value);
				}
			}}
			placeholder="Venue type"
			type="text" />
			) 
	}
}

export default Venuecategory;