// routes/pizzas.js

const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');
const ingredientController = require('../controllers/ingredientController');
const {postIngredient} = require('../controllers/ingredientController');
const {postPizza} = require('../controllers/pizzaController');

// Liste des pizzas
router.get('/', pizzaController.listPizzas);

// Détail d’une pizza
router.get('/:id', pizzaController.getPizza);

// Pizza ingredients
router.get("/:id/ingredients", pizzaController.getIngredientsByPizza);

// Ajout d'un ingrédient
router.post('/ingredients', postIngredient);

// Ajout d'une Pizza
router.post('/pizzas', postPizza);

module.exports = router;
