import React, { Component } from 'react';
import { Marker, InfoWindow} from "react-google-maps";
import * as FourSquareAPI from '../api/FourSquareAPI';

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

	componentDidMount = async() => {
		const venueId = this.props.place.id;
		const venuePhoto = await FourSquareAPI.getPhoto(venueId);

		await this.setStateAsync({
			photo: `${venuePhoto.prefix}300x300${venuePhoto.suffix}`
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
								<img alt={`An image of ${this.props.place.name}`} src={this.state.photo ? this.state.photo : 'http://via.placeholder.com/300x300'}/>
							</div>
						</InfoWindow>}
					</div>
				</Marker>
			</div>
			)
	}
}

export default MarkerComponent;