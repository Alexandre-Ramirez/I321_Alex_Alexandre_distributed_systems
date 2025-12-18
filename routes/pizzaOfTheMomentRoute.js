// routes/pizzaOfTheMomentRoute.js
const express = require('express');
const {
    fetchAllPizzaOfTheMoments,
    fetchPizzasOfTheMomentById,
    createPizzasOfTheMoment,
    patchPizzasOfTheMoment,
} = require("../controllers/pizzaOfTheMomentController.js");
const router = express.Router();

// Get
router.get('/', fetchAllPizzaOfTheMoments);
router.get('/:id', fetchPizzasOfTheMomentById);

// POST
router.post('/', createPizzasOfTheMoment);

// PUT
router.put('/:id', patchPizzasOfTheMoment);

module.exports = router;