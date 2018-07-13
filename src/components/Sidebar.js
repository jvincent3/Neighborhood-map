import React, { Component } from 'react';
import SearchBox from './SearchBox';
const google = window.google;

class Sidebar extends Component {
	render () {
		return (
			<div id="breadcrumb" className="Sidebar">
				<SearchBox />
				<ul>
					<li>Home</li>
				</ul>
			</div>
			);
	}
}

export default Sidebar;