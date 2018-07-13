import React, { Component } from 'react';
const google = window.google;

class SearchBox extends Component {
	render () {
		return (
			<input
			    ref={(c) => {
			      if (!c) {
			        return;
			      }
			      const searchBox = new google.maps.places.SearchBox(c, { types: ['geocode'] });
			      searchBox.addListener('places_changed', ()=> {
			        const places = searchBox.getPlaces();
			        if (places.length > 0) {
			          const position = places[0].geometry.location;
			        
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