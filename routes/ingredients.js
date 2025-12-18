const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');
const pizzaController = require('../controllers/pizzaController');

// GET de tous les ingrédients
router.get('/', ingredientController.getAllIngredients);

// GET d’un ingrédient par id
router.get('/:id', ingredientController.getIngredientById);

// POST d’un nouvel ingrédient
router.post('/', ingredientController.postIngredient);

// GET des ingrédients liés à une pizza (optionnel)
router.get('/:id/ingredients', pizzaController.getIngredientsByPizza);

module.exports = router;
