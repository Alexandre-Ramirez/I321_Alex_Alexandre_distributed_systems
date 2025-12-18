// routes/pizzaOfTheMomentRoute.js
const express = require('express');
const {
    fetchAllPizzaOfTheMoments,
    fetchPizzasOfTheMomentById,
    createPizzasOfTheMoment,
    updatePizzasOfTheMomentFull,
    patchPizzasOfTheMoment,
} = require("../controllers/pizzaOfTheMomentController.js");
const router = express.Router();

// Get
router.get('/', fetchAllPizzaOfTheMoments);
router.get('/:id', fetchPizzasOfTheMomentById);

// POST
router.post('/', createPizzasOfTheMoment);

//PUT
router.put('/:id', updatePizzasOfTheMomentFull);

// PATCH
router.patch('/:id', patchPizzasOfTheMoment);

module.exports = router;

/**
 * @swagger
 * /pizza-du-jour:
 *   get:
 *     summary: Liste toutes les pizzas du moment
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des pizzas du moment
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PizzaOfTheMoment'
 *       404:
 *         description: Aucune pizza du moment trouvée
 *
 *   post:
 *     summary: Crée une pizza du moment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PizzaOfTheMoment'
 *     responses:
 *       201:
 *         description: Pizza du moment créée
 */

/**
 * @swagger
 * /pizza-du-jour/{id}:
 *   get:
 *     summary: Récupère une pizza du moment par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pizza du moment trouvée
 *       404:
 *         description: Pizza du moment non trouvée
 *
 *   put:
 *     summary: Met à jour complètement une pizza du moment
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
 *             $ref: '#/components/schemas/PizzaOfTheMoment'
 *     responses:
 *       200:
 *         description: Pizza du moment mise à jour
 *
 *   patch:
 *     summary: Met à jour partiellement une pizza du moment
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               imageUrl:
 *                 type: string
 *               price:
 *                 type: number
 *               start_date:
 *                 type: string
 *               end_date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pizza du moment mise à jour partiellement
 */