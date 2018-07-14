import React, { Component } from 'react';
import SearchBox from './SearchBox';

class Sidebar extends Component {
	render () {
		return (
			<div id="breadcrumb" className="Sidebar">
				<h2>Neighborhood Map</h2>
				<SearchBox
				updateCurrentLoc= {this.props.updateCurrentLoc}/>
				<ul>
					<li>Home</li>
				</ul>
			</div>
			);
	}
}

export default Sidebar;