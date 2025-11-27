import express from 'express'
import { fetchAllPizzas, fetchPizzasById, fetchPizzaIngredients} from "../controllers/pizzaController.js";

const router = express.Router();

// Liste des pizzas
router.get('/', fetchAllPizzas);

// Détail d’une pizza
router.get('/:id', fetchPizzasById);

router.get("/:id/ingredients", fetchPizzaIngredients);

export default router;
