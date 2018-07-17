import request from 'request';

export const getData = search => {
	return new 	Promise(resolve => {

		request({
		  url: 'https://api.foursquare.com/v2/venues/search',
		  method: 'GET',
		  qs: 	{
		    client_id: 'KS1YNFPQSMDAF4UGOGB5XJ4WU0YSDMCJRY2EAVZMFNDYNKI4',
		    client_secret: 'NY5VL4R4CQXVHND1W0QSBWVJN3UZZFRUIZMWZECYMEP20MS5',
		    ll: `${search.lat}, ${search.lng}`,
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