import React, { Component } from 'react';
import { Marker, InfoWindow} from "react-google-maps";

class MarkerComponent extends Component {

	state = {
		show: false
	}

	onToggleOpen = () => {
	      this.setState({
	      	show: !this.state.show,
	      })
	}

	render() {
		return (
			<div>
				<Marker position={this.props.position} onClick={this.onToggleOpen}>
					<div>
						{this.state.show && <InfoWindow onCloseClick={this.onToggleOpen}>
							<div>
								<h4>{this.props.place.name}</h4>
								<p>{this.props.place.location.formattedAddress[0]}</p>
							</div>
						</InfoWindow>}
					</div>
				</Marker>
			</div>
			)
	}
}

export default MarkerComponent;