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
						<InfoBox options={{pixelOffset: new google.maps.Size(-120, -200) , closeBoxURL: '',boxStyle: {width: "200px"} }} visible={this.props.place.verified}>
							<div>
								<h3 role="heading" role-level="7">{this.props.place.name}</h3>
								<p>{this.props.place.location.formattedAddress[0]}</p>
							</div>
						</InfoBox>
					</div>
				</Marker>
			</div>
			)
	}
}

export default MarkerComponent;