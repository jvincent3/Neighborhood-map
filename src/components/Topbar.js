import React, { Component } from 'react';
import SearchBox from './SearchBox';

class Topbar extends Component {
	render() {
		return (
			<div className="Topbar">
				<h2>Neighborhood Map</h2>
				<SearchBox
				updateCurrentLoc= {this.props.updateCurrentLoc}
				/>
			</div>
			)
	}
}

export default Topbar;