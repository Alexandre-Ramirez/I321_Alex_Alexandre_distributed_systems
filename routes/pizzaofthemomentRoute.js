// routes/pizzaOfTheMomentRoute.js

const express = require('express');
const router = express.Router();
const {fetchAllPizzaOfTheMoments} = require("../controllers/pizzaOfTheMomentController");

// Getter pizza du moment
router.get('/', fetchAllPizzaOfTheMoments);

module.exports = router;