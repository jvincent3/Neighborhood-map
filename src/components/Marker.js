import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const google = window.google;

class MarkerComponent extends Component {

	state = {
		photo: ''
	};

	render() {
		return (
			<div>
				<Marker position={this.props.position} animation={this.props.place.verified ? google.maps.Animation.BOUNCE : null} onClick={() => this.props.toggleInfoBox(this.props.place.id)}>
					<div>
						<InfoBox options={{pixelOffset: new google.maps.Size(50, -300) , closeBoxURL: '' }} visible={this.props.place.verified}>
							<div>
								<h4>{this.props.place.name}</h4>
								<p>{this.props.place.location.formattedAddress[0]}</p>
								<img alt={`${this.props.place.name}`} src={this.state.photo ? this.state.photo : 'http://via.placeholder.com/300x300'}/>
							</div>
						</InfoBox>
					</div>
				</Marker>
			</div>
			)
	}
}

export default MarkerComponent;