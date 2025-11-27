import { getAllPizzas, getPizzasById} from "../models/pizza.model.js";
import { isValidInteger } from "../utils/helper.mjs"

export const getIngredientsByPizza = async (req, res) => {
    try {
        const pizzaId = req.params.id;
        const ingredients = await getPizzaIngredients(pizzaId);

        res.status(200).json({
            pizzaId,
            ingredients
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur." });
    }
};


export const fetchAllPizzas = async (req, res, next) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit, 10) : null;
        if (limit !== null && (!isValidInteger(limit) || limit <= 0)) {
            throw {status: 400, message: 'Limit must be a positive number.'};
        }
        const pizzas = await getAllPizzas(limit);
        if (!pizzas || pizzas.length === 0) {
            throw {status: 404, message: 'No pizzas found.'};
        }
        res.status(200).json(pizzas);
    } catch (error) {
        next(error);
    }
};

export const fetchPizzasById = async (req, res, next) => {
    try {
        const {id} = req.params;
        if (!isValidInteger(id)) {
            throw {status: 400, message: "Invalid id"};
        }
        const pizza = await getPizzasById(id);

        if (!pizza()) {
            throw {status: 404, message: "Pizza not found"};
        }

        res.status(200).json(pizza);
    } catch (error) {
        next(error);
    }
};