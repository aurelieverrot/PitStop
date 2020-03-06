const formEl = document.querySelector('.newRestroom');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const newRestroom = {
    locationName: location_name.value,
    streetAddress: street_name.value,
    cityState: city_name.value,
    country: country.value,
    directions: directions.value,
    hours: hours.value,
    accessible: accessible.value,
    genderNeutral: gender_neutral.value,
    changingStation: changing_station.value,
    reqPurchase: req_purchase.value,
    sanitaryProducts: sanitary_products.value,
  };

  fetch(`/api/v1/restrooms/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRestroom)
  })
  .then((stream) => stream.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
  
  alert('Thank you for your submission!');
  window.location = "/";
});