import React, { Component } from 'react';
import { Marker, InfoWindow} from "react-google-maps";

const google = window.google;

class MarkerComponent extends Component {

	state = {
		show: false,
		photo: ''
	}

	onToggleOpen = () => {
	      this.setState({
	      	show: !this.state.show,
	      })
	}

	render() {
		return (
			<div>
				<Marker position={this.props.position} animation={google.maps.Animation.DROP} onClick={this.onToggleOpen}>
					<div>
						{this.state.show && <InfoWindow onCloseClick={this.onToggleOpen}>
							<div>
								<h4>{this.props.place.name}</h4>
								<p>{this.props.place.location.formattedAddress[0]}</p>
								<img alt={`${this.props.place.name}`} src={this.state.photo ? this.state.photo : 'http://via.placeholder.com/300x300'}/>
							</div>
						</InfoWindow>}
					</div>
				</Marker>
			</div>
			)
	}
}

export default MarkerComponent;