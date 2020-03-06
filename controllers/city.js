const db = require('../models');

const index = (req, res) => {
  db.City.find({}, (err, foundCities) => {
    if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

    res.json(foundCities);
  });
};

const update = (req, res) => {
  // Selects a city within the db that matches the cityState in the restroom db entry
  db.City.findOne({ cityState: req.body.cityState }, (err, foundCity) => {
    if (err) {
      return res.status(400).json({ status: 400, error:'Something went wrong, please try again.'});
    };

    for (let i = 0; i < foundCity.restrooms.length; i++) {
      const targetRestroom = foundCity.restrooms[i];
      const updatedRestroom = req.body;
      if (foundCity.restrooms[i].id === req.params.id) {
        Object.assign(targetRestroom, updatedRestroom);
      }
    };

    foundCity.save((err, savedCity) => {
      // TODO expand error response
      if (err) return res.json(err);

      res.json(savedCity); 
    });
  });
};

const destroy = (req, res) => {
  // Find the restroom with the URL path
  db.Restroom.findById(req.params.id, (err, foundRestroom) => {
    if (err) {
      return res.status(400).json({ status: 400, error: "Something went wrong, please try again!"});
    };

    const cityName = foundRestroom.cityState;
    // Find the City in the db that matches the city name
    db.City.findOne({ cityState: cityName }, (err, foundCity) => {
      if (err) {
        return res.status(400).json({ status: 400, error: "Something went wrong, please try again!"});
      };

      const restroomToRemove = foundCity.restrooms.id(req.params.id);
      restroomToRemove.remove();

      foundCity.save((err, savedCity) => {
        if (err) return res.status(400).json({ status: 400, error: "Something's wrong, please try again."});

        // Go to the original Restroom from the Restroom collection and delete it!
        db.Restroom.findById(req.params.id, (err, deletedRestroom) => {
          if (err) return res.status(400).json({ status: 400, error: "Something's wrong, please try again."});

          res.json(deletedRestroom);
        });
      });
    });
  });
};

// foundCity.save((err, savedCity) => {
//   if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

//   // Now we need to delete the original Post from the Post collection
//   db.Post.findByIdAndDelete(req.params.postId, (err, deletedPost) => {
//     if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
//     res.json(deletedPost);


// const destroy = (req, res) => {
//   db.City.findOne({ cityState: req.body.cityState }, (err, foundCity)=> {
//     if (err) {
//       return res.status(400).json({ status: 400, error: "Something went wrong, please try again!"});
//     };
//     console.log(foundCity);
//     for (let i = 0; i < foundCity.restrooms.length; i++) {
//       const targetRestroom = foundCity.restrooms[i];
//       if (foundCity.restrooms[i].id === req.params.id) {
//         targetRestroom.remove();
//       }
//       else {
//         console.log("Nope, try again!");
//       }
//     };

//     foundCity.save((err, savedCity) => {
//       if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again'});
    
//       console.log(savedCity);
//     });
    
//   });
// };

module.exports = {
  index,
  update,
  destroy };