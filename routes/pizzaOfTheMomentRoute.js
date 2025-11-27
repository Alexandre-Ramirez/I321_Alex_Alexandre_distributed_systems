// routes/pizzaOfTheMomentRoute.js
import {fetchAllPizzaOfTheMoments,fetchPizzasOfTheMomentById} from "../controllers/pizzaOfTheMomentController.js";
import express from "express";

const router = express.Router();

// Getter pizza du moment
router.get('/', fetchAllPizzaOfTheMoments);

router.get('/:id', fetchPizzasOfTheMomentById);

export default router;