import React, { Component } from 'react';
import './SearchBox.css'
const google = window.google;

class SearchBox extends Component {
	render () {
		return (
			<input
				className="Searchbox"
			    ref={(c) => {
			      if (!c) {
			        return;
			      }
			      const searchBox = new google.maps.places.SearchBox(c, { types: ['geocode'] });
			      searchBox.addListener('places_changed', ()=> {
			        const places = searchBox.getPlaces();
			        if (places.length > 0) {
			          const position = {lat: places[0].geometry.location.lat(), lng: places[0].geometry.location.lng()};
			          this.props.updateCurrentLoc(position)
			        }
			      })
			    }}
			    placeholder="Search a place..."
			    type="text"
			  />
			)
	}
}

export default SearchBox;