const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

// Liste des pizzas
router.get('/', pizzaController.fetchAllPizzas);

// Détail d’une pizza
router.get('/:id', pizzaController.fetchPizzasById);

// Pizza ingredients
router.get('/:id/ingredients', pizzaController.getIngredientsByPizza);

// Ajout d'une Pizza
router.post('/', pizzaController.postPizza);

module.exports = router;
