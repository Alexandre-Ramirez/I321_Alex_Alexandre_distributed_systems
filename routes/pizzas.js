// routes/pizzas.js

const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

// Liste des pizzas
router.get('/', pizzaController.listPizzas);

// Détail d’une pizza
router.get('/:id', pizzaController.getPizza);

// Pizza ingredients
router.get("/:id/ingredients", pizzaController.getIngredientsByPizza);

module.exports = router;
