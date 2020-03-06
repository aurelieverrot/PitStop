const db = require('../models');

const index = (req, res) => {
     db.City.find({}, (err, foundCities) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(foundCities);
     });
};

const update = (req, res) => {
  db.City.findOne({ cityState: req.body.cityState }, (err, foundCity) => {
        if (err) {
          return res.status(400).json({ status: 400, error:'Something went wrong, please try again.'});
        }
        console.log("City was found!");

        // Return the entire restroom object from within the city restrooms []
        let targetRestroom = foundCity.restrooms.id(req.params.id);
        console.log(targetRestroom);

        for (let i = 0; i < foundCity.restrooms.length; i++) {
          // foundCity contains the restroom I'm trying to update
          const currentRestroom = foundCity.restrooms[i];
          // targetRestroom is the restroom I'm trying to update
          if (currentRestroom.id === targetRestroom.id) {
            foundCity.restrooms[i] = req.body; 
            console.log(foundCity);
          }
        };

        foundCity.save((err, savedCity) => {
          if (err) return res.json(err);

          res.json(savedCity); 
        });
  });
};


// foundCity.save((err, savedCity) => {
//   if (err) return res.json(err);
// });

module.exports = {
  index,
  update };




  //  // Find the restroom subdocument using the mongoose id() method

  //  // If we do not find a record, do not continue past this point.
  //  // Respond back appropriately
  //  if (!restroomToUpdate) {
  //    return res.status(400).json({ status: 400, error: 'Could not find restroom'});
  //  }

  //  // If we make it past the err handler, we found the document to be updated
  //  // Use appropriate methods on that document to update
  //  console.log("restroomToUpdate: " + restroomToUpdate);
  //  console.log("restroomToUpdate.locationName: " + restroomToUpdate.locationName);
  //  const updatedRestroom = {
  //    locationName: restroomToUpdate.locationName,
  //    streetAddress: restroomToUpdate.streetAddress,
  //    cityState: restroomToUpdate.cityState,
  //    country: restroomToUpdate.country,
  //    directions: restroomToUpdate.directions,
  //    hours: restroomToUpdate.hours,
  //    accessible: restroomToUpdate.accessible,
  //    genderNeutral: restroomToUpdate.genderNeutral,
  //    changingStation: restroomToUpdate.changingStation,
  //    reqPurchase: restroomToUpdate.reqPurchase,
  //    sanitaryProducts: restroomToUpdate.sanitaryProducts
  //  };
 

 // console.log(updatedRestroom);
 //  restroomToUpdate = updatedRestroom;