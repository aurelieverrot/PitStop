const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const db = require('../models');

// TODO REMEMBER THIS: Path starts at 'api/v1'

// -----------------------
//     Cities Routes
// -----------------------

router.get('/cities', ctrl.city.index);
router.put('/cities/:id', ctrl.city.update);
router.delete('/cities/:id', ctrl.city.destroy);

// -----------------------ß
//    Restrooms Routes
// -----------------------

router.get('/restrooms', ctrl.restroom.index);
router.get('/restrooms/:id', ctrl.restroom.show);
router.post('/restrooms/new', ctrl.restroom.create);
router.put('/restrooms/:id', ctrl.restroom.update);
// router.delete('/restrooms/:id', ctrl.restroom.destroy); // Restroom is deleted through cities route.

// -----------------------
//      Export Router
// -----------------------
module.exports = router;

