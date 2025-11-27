// routes/ingredientsRoute.js
import {fetchAllIngredients,fetchIngredientById} from "../controllers/ingredientController";

const express = require('express');
const router = express.Router();

// Getter pizza du moment
router.get('/', fetchAllIngredients);

router.get('/:id', fetchIngredientById);

module.exports = router;