const db = require('./models');

const cities_list = [
  {
    cityState: 'San Francisco, CA',
    country: 'USA',
    restrooms: [
      {
        "_id": "5e626be7658a44373a8e796c",
        "locationName": "Beachside Cafe",
        "streetAddress": "4300 Judah St",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.5098,
        "latitude": 37.760274,
        "directions": "",
        "hours": "true",
        "accessible": true,
        "genderNeutral": true,
        "changingStation": true,
        "reqPurchase": true,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e796d",
        "locationName": "La Promenade Cafe",
        "streetAddress": "3643 Balboa St",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.4992293,
        "latitude": 37.7755945,
        "directions": "",
        "hours": "true",
        "accessible": true,
        "genderNeutral": true,
        "changingStation": true,
        "reqPurchase": true,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e796e",
        "locationName": "Ferry Building",
        "streetAddress": "1 Embarcadero",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.3959707,
        "latitude": 37.795838,
        "directions": "",
        "hours": "true",
        "accessible": true,
        "genderNeutral": true,
        "changingStation": true,
        "reqPurchase": true,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e796f",
        "locationName": "Comstock Saloon",
        "streetAddress": "155 Columbus Avenue",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.4077509,
        "latitude": 37.79693,
        "directions": "1st floor, back of the bar on the lower side, behind the booths.",
        "hours": "true",
        "accessible": true,
        "genderNeutral": true,
        "changingStation": true,
        "reqPurchase": true,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e7970",
        "locationName": "SF Public Bathroom Union Square",
        "streetAddress": "252 Geary St",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.4096695,
        "latitude": 37.7876432,
        "directions": "In front of Macy's. Costs $.25, and police carry tokens for free.",
        "genderNeutral": true,
        "changingStation": false,
        "reqPurchase": true,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e7971",
        "locationName": "SF Public Bathroom Tenderloin",
        "streetAddress": "Eddy St. and Jones St.",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.4122697,
        "latitude": 37.7841238,
        "directions": "",
        "genderNeutral": true,
        "changingStation": false,
        "reqPurchase": false,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e7972",
        "locationName": "SF Public Bathroom Mission",
        "streetAddress": "16th and Capp street",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.4187982,
        "latitude": 37.7651596,
        "directions": "Right after the mural",
        "genderNeutral": true,
        "changingStation": false,
        "reqPurchase": true,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e7973",
        "locationName": "SF Public Bathroom SFO Airport",
        "streetAddress": "SFO Airport",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.391027,
        "latitude": 37.61636,
        "directions": "Arrivals floor",
        "genderNeutral": true,
        "changingStation": true,
        "reqPurchase": false,
        "sanitaryProducts": true,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e7974",
        "locationName": "Target Bush Street",
        "streetAddress": "255 Bush Street",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.4030818,
        "latitude": 37.7907364,
        "directions": "At the corner of Bush St and Sansome St",
        "genderNeutral": true,
        "changingStation": false,
        "reqPurchase": true,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e7975",
        "locationName": "Westfield Center",
        "streetAddress": "865 Market St",
        "cityState": "San Francisco, CA",
        "country": "USA",
        "longitude": -122.407388,
        "latitude": 37.7865973,
        "directions": "At the food court",
        "genderNeutral": true,
        "changingStation": true,
        "reqPurchase": false,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        }
    ]
  },
  {
    cityState: 'Walnut Creek, CA',
    country: 'USA',
    restrooms: [
      {
        "_id": "5e626be7658a44373a8e7976",
        "locationName": "Broadway Plaza",
        "streetAddress": "1 Broadway Plaza",
        "cityState": "Walnut Creek, CA",
        "country": "USA",
        "longitude": -122.0596853,
        "latitude": 37.8958277,
        "directions": "Next to Soul Cycle",
        "genderNeutral": true,
        "changingStation": true,
        "reqPurchase": false,
        "sanitaryProducts": true,
        "starRating": null,
        "__v": 0
        },
        {
        "_id": "5e626be7658a44373a8e7977",
        "locationName": "Civic Park",
        "streetAddress": "1375 Civic Dr, Walnut Creek, CA 94596",
        "cityState": "Walnut Creek, CA",
        "country": "USA",
        "longitude": -122.061646,
        "latitude": 37.902513,
        "directions": "In the parking lot",
        "genderNeutral": true,
        "changingStation": false,
        "reqPurchase": false,
        "sanitaryProducts": false,
        "starRating": null,
        "__v": 0
        }
    ]
  },
  {
    cityState: 'Boston, MA',
    country: 'USA',
    restrooms: []
  },
  {
    cityState: 'Chicago, IL',
    country: 'USA',
    restrooms: []
  }
];

const restrooms_list = [
  {
    "_id": "5e626be7658a44373a8e796c",
    "locationName": "Beachside Cafe",
    "streetAddress": "4300 Judah St",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.5098,
    "latitude": 37.760274,
    "directions": "",
    "hours": "true",
    "accessible": true,
    "genderNeutral": true,
    "changingStation": true,
    "reqPurchase": true,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e796d",
    "locationName": "La Promenade Cafe",
    "streetAddress": "3643 Balboa St",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.4992293,
    "latitude": 37.7755945,
    "directions": "",
    "hours": "true",
    "accessible": true,
    "genderNeutral": true,
    "changingStation": true,
    "reqPurchase": true,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e796e",
    "locationName": "Ferry Building",
    "streetAddress": "1 Embarcadero",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.3959707,
    "latitude": 37.795838,
    "directions": "",
    "hours": "true",
    "accessible": true,
    "genderNeutral": true,
    "changingStation": true,
    "reqPurchase": true,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e796f",
    "locationName": "Comstock Saloon",
    "streetAddress": "155 Columbus Avenue",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.4077509,
    "latitude": 37.79693,
    "directions": "1st floor, back of the bar on the lower side, behind the booths.",
    "hours": "true",
    "accessible": true,
    "genderNeutral": true,
    "changingStation": true,
    "reqPurchase": true,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e7970",
    "locationName": "SF Public Bathroom Union Square",
    "streetAddress": "252 Geary St",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.4096695,
    "latitude": 37.7876432,
    "directions": "In front of Macy's. Costs $.25, and police carry tokens for free.",
    "genderNeutral": true,
    "changingStation": false,
    "reqPurchase": true,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e7971",
    "locationName": "SF Public Bathroom Tenderloin",
    "streetAddress": "Eddy St. and Jones St.",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.4122697,
    "latitude": 37.7841238,
    "directions": "",
    "genderNeutral": true,
    "changingStation": false,
    "reqPurchase": false,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e7972",
    "locationName": "SF Public Bathroom Mission",
    "streetAddress": "16th and Capp street",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.4187982,
    "latitude": 37.7651596,
    "directions": "Right after the mural",
    "genderNeutral": true,
    "changingStation": false,
    "reqPurchase": true,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e7973",
    "locationName": "SF Public Bathroom SFO Airport",
    "streetAddress": "SFO Airport",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.391027,
    "latitude": 37.61636,
    "directions": "Arrivals floor",
    "genderNeutral": true,
    "changingStation": true,
    "reqPurchase": false,
    "sanitaryProducts": true,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e7974",
    "locationName": "Target Bush Street",
    "streetAddress": "255 Bush Street",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.4030818,
    "latitude": 37.7907364,
    "directions": "At the corner of Bush St and Sansome St",
    "genderNeutral": true,
    "changingStation": false,
    "reqPurchase": true,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e7975",
    "locationName": "Westfield Center",
    "streetAddress": "865 Market St",
    "cityState": "San Francisco, CA",
    "country": "USA",
    "longitude": -122.407388,
    "latitude": 37.7865973,
    "directions": "At the food court",
    "genderNeutral": true,
    "changingStation": true,
    "reqPurchase": false,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e7976",
    "locationName": "Broadway Plaza",
    "streetAddress": "1 Broadway Plaza",
    "cityState": "Walnut Creek, CA",
    "country": "USA",
    "longitude": -122.0596853,
    "latitude": 37.8958277,
    "directions": "Next to Soul Cycle",
    "genderNeutral": true,
    "changingStation": true,
    "reqPurchase": false,
    "sanitaryProducts": true,
    "starRating": null,
    "__v": 0
    },
    {
    "_id": "5e626be7658a44373a8e7977",
    "locationName": "Civic Park",
    "streetAddress": "1375 Civic Dr, Walnut Creek, CA 94596",
    "cityState": "Walnut Creek, CA",
    "country": "USA",
    "longitude": -122.061646,
    "latitude": 37.902513,
    "directions": "In the parking lot",
    "genderNeutral": true,
    "changingStation": false,
    "reqPurchase": false,
    "sanitaryProducts": false,
    "starRating": null,
    "__v": 0
    }
];

db.City.deleteMany({}, (err, cities) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Removed all cities');
  db.City.create(cities_list, (err, cities) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Recreated all cities');
    console.log(`Created ${cities.length} cities`);
  });

  db.Restroom.deleteMany({}, (err, restrooms) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Removed all restrooms');
    db.Restroom.create(restrooms_list, (err, restrooms) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Recreated all restrooms');
      console.log(`Created ${restrooms.length} restrooms`);
    });
  });
});