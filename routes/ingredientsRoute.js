// routes/ingredientsRoute.js
import {fetchAllIngredients,fetchIngredientById} from "../controllers/ingredientController.js";
import express from "express";

const router = express.Router();

// Getter pizza du moment
router.get('/', fetchAllIngredients);

router.get('/:id', fetchIngredientById);

export default router;