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

//Modification du prix d'une pizza
router.patch('/:id/price', pizzaController.updatePizzaPrice);

//Suppression d'une pizza
router.delete('/:id', pizzaController.deletePizza);


module.exports = router;

/**
 * @swagger
 * /pizzas:
 *   get:
 *     summary: Liste toutes les pizzas
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: Limite du nombre de pizzas
 *     responses:
 *       200:
 *         description: Liste des pizzas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pizza'
 *       404:
 *         description: Aucune pizza trouvée
 *
 *   post:
 *     summary: Crée une nouvelle pizza
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pizza'
 *     responses:
 *       201:
 *         description: Pizza créée
 */
/**
 * @swagger
 * /pizzas/{id}:
 *   get:
 *     summary: Récupère une pizza par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pizza trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pizza'
 *       404:
 *         description: Pizza non trouvée
 *
 *   delete:
 *     summary: Supprime une pizza
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pizza supprimée
 *
 *   patch:
 *     summary: Met à jour le prix d'une pizza
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Prix mis à jour
 */