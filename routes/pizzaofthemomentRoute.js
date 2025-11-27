// routes/pizzaOfTheMomentRoute.js
import {fetchAllPizzaOfTheMoments,fetchPizzasOfTheMomentById} from "../controllers/pizzaOfTheMomentController";

const express = require('express');
const router = express.Router();

// Getter pizza du moment
router.get('/', fetchAllPizzaOfTheMoments);

router.get('/:id', fetchPizzasOfTheMomentById);

module.exports = router;