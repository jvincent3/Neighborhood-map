import request from 'request';

const api = 'https://api.foursquare.com/v2/venues/';
const clientId = 'KS1YNFPQSMDAF4UGOGB5XJ4WU0YSDMCJRY2EAVZMFNDYNKI4';
const clientSecret = 'NY5VL4R4CQXVHND1W0QSBWVJN3UZZFRUIZMWZECYMEP20MS5';

export const getData = search => {
	return new 	Promise(resolve => {

		request({
		  url: `${api}search`,
		  method: 'GET',
		  qs: {
		    client_id: clientId,
		    client_secret: clientSecret,
		    ll: `${search.lat}, ${search.lng}`,
		    query: 'food',
		    v: '20180323',
		    limit: 10,
		    sortByDistance: 1
		  }
		}, (err, res, body) => {
			const data = JSON.parse(body);
			if (Object.keys(data.response).length > 0) {
				resolve(data.response.venues)
			} else {
				alert("The place you're current searching doesn't exist: " + search);
			}
		});
	});
}

export const getPhoto = (venueId) => {
	return new Promise (resolve => {
		request({
			url: `${api+venueId}/photos`,
			method: 'GET',
			qs: {
				client_id: clientId,
				client_secret: clientSecret,
				v: '20180719',
				height: '300',
				width: '300',
				limit: 1
			}
		}, (err, res, body) => {
			const data = JSON.parse(body);
			if (Object.keys(data.response).length > 0) {
				resolve(data.response.photos.items);
			} else {
				console.log("The place you're current searching doesn't exist: ");
			}
		});
	});
}