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

// DELETE Suppression d'une pizza
router.delete('/:id', ingredientController.deleteIngredient);

// PUT modification d'un ingrédient
router.put('/:id', ingredientController.updateIngredient);

module.exports = router;

/**
 * @swagger
 * /ingredients:
 *   get:
 *     summary: Liste tous les ingrédients
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des ingrédients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingredient'
 *       404:
 *         description: Aucun ingrédient trouvé
 *
 *   post:
 *     summary: Crée un nouvel ingrédient
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ingredient'
 *     responses:
 *       201:
 *         description: Ingrédient créé
 */
/**
 * @swagger
 * /ingredients/{id}:
 *   get:
 *     summary: Récupère un ingrédient par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ingrédient trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       404:
 *         description: Ingrédient non trouvé
 *
 *   put:
 *     summary: Met à jour un ingrédient
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
 *             $ref: '#/components/schemas/Ingredient'
 *     responses:
 *       200:
 *         description: Ingrédient mis à jour
 *
 *   delete:
 *     summary: Supprime un ingrédient
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ingrédient supprimé
 */
/**
 * @swagger
 * /ingredients/{id}/ingredients:
 *   get:
 *     summary: Récupère les ingrédients d'une pizza (optionnel)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des ingrédients pour une pizza
 */