const express = require('express');
const router = express.Router();

// Index View
router.get('/', (req, res) => {
  res.sendFile('/views/index.html', {
    root: __dirname + '/../'
  });
});

// Show View
router.get('/restrooms/view', (req, res) => {
  res.sendFile('/views/restrooms/show.html', {
    root: __dirname + '/../'
  });
});

// New Entry View
router.get('/restrooms/new', (req, res) => {
  res.sendFile('/views/restrooms/new.html', {
    root: __dirname + '/../'
  });
});

// Edit / Delete View
router.get('/restrooms/edit/:id', (req, res) => {
  res.sendFile('/views/restrooms/edit.html', {
    root: __dirname + '/../'
  });
});

module.exports = router;