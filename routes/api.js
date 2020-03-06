const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const db = require('../models');
// Hooray! We get to define all the routes here! :D
// We name them and connect them however we want

// TODO REMEMBER THIS: Path starts at 'api/v1'

// -----------------------
//     Cities Routes
// -----------------------

// Index API Route
// When you hit /api/v1/cities, do this: ctrl.city.index (in controllers)
router.get('/cities', ctrl.city.index);
// router.get('/cities/:id', ctrl.city.show);
// router.post('/cities', ctrl.city.create);
router.put('/cities/:id', ctrl.city.update);
router.delete('/cities/:id', ctrl.city.destroy);

// -----------------------ß
//    Restrooms Routes
// -----------------------

router.get('/restrooms', ctrl.restroom.index);
router.get('/restrooms/:id', ctrl.restroom.show);
router.post('/restrooms/new', ctrl.restroom.create);
router.put('/restrooms/:id', ctrl.restroom.update);
// router.delete('/restrooms/:id', ctrl.restroom.destroy);

// -----------------------
//      Export Router
// -----------------------
module.exports = router;

