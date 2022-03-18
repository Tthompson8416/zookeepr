const router = require('express').Router();
const animalRoutes = require('./animalRoute.js');

router.use(animalRoutes);

module.exports = router;