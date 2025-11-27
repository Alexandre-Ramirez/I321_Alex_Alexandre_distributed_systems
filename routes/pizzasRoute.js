import express from 'express'
import { fetchAllPizzas, fetchPizzasById } from "../controllers/pizzaController.js";

const router = express.Router();

// Liste des pizzas
router.get('/', fetchAllPizzas);

// Détail d’une pizza
router.get('/:id', fetchPizzasById);

export default router;
