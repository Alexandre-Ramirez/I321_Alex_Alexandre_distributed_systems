// routes/pizzas.js

const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');
const ingredientController = require('../controllers/ingredientController');
const {postIngredient} = require('../controllers/ingredientController');

// Liste des pizzas
router.get('/', pizzaController.listPizzas);

// Détail d’une pizza
router.get('/:id', pizzaController.getPizza);

// Pizza ingredients
router.get("/:id/ingredients", pizzaController.getIngredientsByPizza);

router.post('/ingredients', postIngredient);

module.exports = router;
