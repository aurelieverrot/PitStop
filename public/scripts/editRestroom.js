const locationName = document.querySelector("#location_name");
const streetName = document.querySelector("#street_name");
const cityName = document.querySelector("#city_name");
const countryName = document.querySelector("#country");
const directions = document.querySelector("#directions");
const changingStation = document.querySelector("#changing_station");
const genderNeutral = document.querySelector("#gender_neutral");
const accessible = document.querySelector("#accessible");
const reqPurchase = document.querySelector("#req_purchase");
const hours = document.querySelector("#hours");
const sanitaryProducts = document.querySelector("#sanitary_products");

// Split the id off of the URL path
const restroomId = window.location.pathname.split('/')[3];

// Prefill the form with restroom's data
fetch(`/api/v1/restrooms/${restroomId}`)
  .then((stream) => stream.json())
  .then((data) => {
    locationName.value = data.locationName;
    streetName.value = data.streetAddress;
    cityName.value = data.cityState;
    countryName.value = data.country;
    changingStation.value = data.changingStation;
    genderNeutral.value = data.genderNeutral;
    accessible.value = data.accessible;
    reqPurchase.value = data.reqPurchase;
    hours.value = data.hours;
    sanitaryProducts.value = data.sanitaryProducts;
  })
  .catch((err) => console.log(err));


const formEl = document.querySelector('#editRestroom');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const editedRestroom = {
    locationName: locationName.value,
    streetAddress: streetName.value,
    cityState: cityName.value,
    country: countryName.value,
    directions: directions.value,
    hours: hours.value,
    accessible: accessible.value,
    genderNeutral: genderNeutral.value,
    changingStation: changingStation.value,
    reqPurchase: reqPurchase.value,
    sanitaryProducts: sanitaryProducts.value
  };

  // Updates the restroom in the restroom db, but not in the city
  fetch(`/api/v1/cities/${restroomId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedRestroom)
  })
  .then((stream) => stream.json())
  .catch((err) => console.log(err));
  
  // Updates the restroom in the city
  fetch(`/api/v1/restrooms/${restroomId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedRestroom)
  })
  .then((stream) => stream.json())
  .catch((err) => console.log(err));

  alert('Thank you for your update!');
  window.location = '/';
});
// /submit


const deleteForeverButton = document.querySelector('#delete-button');

deleteForeverButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Deletes restroom from /api/v1/cities/:id endpoint
  fetch(`/api/v1/cities/${restroomId}`, {
    method: 'DELETE',
  })
  .then((data) => {
    console.log("Deleted city!")
  })
  .catch((err) => console.log(err));

  // alert('Hope you meant it! It\'s gone FOREVER!');
  // window.location = '/';
});

// /delete