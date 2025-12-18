const { getAllPizzas, getPizzaById, getPizzaIngredients, postPizza, postIngredient } = require('../models/pizza.model');
const { isValidInteger, validatePizzaData } = require('../utils/helper.mjs');

const pizzaController = {

    getIngredientsByPizza: (req, res) => {
        try {
            const pizzaId = req.params.id;
            const ingredients = getPizzaIngredients(pizzaId);
            res.status(200).json({ pizzaId, ingredients });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erreur serveur." });
        }
    },

    fetchAllPizzas: (req, res, next) => {
        try {
            const limit = req.query.limit ? parseInt(req.query.limit, 10) : null;
            if (limit !== null && (!isValidInteger(limit) || limit <= 0)) {
                throw { status: 400, message: 'Limit must be a positive number.' };
            }
            const pizzas = getAllPizzas(limit);
            if (!pizzas || pizzas.length === 0) {
                throw { status: 404, message: 'No pizzas found.' };
            }
            res.status(200).json(pizzas);
        } catch (error) {
            next(error);
        }
    },

    fetchPizzasById: (req, res, next) => {
        try {
            const { id } = req.params;
            if (!isValidInteger(id)) {
                throw { status: 400, message: "Invalid id" };
            }
            const pizza = getPizzaById(id);
            if (!pizza) {
                throw { status: 404, message: "Pizza not found" };
            }
            res.status(200).json(pizza);
        } catch (error) {
            next(error);
        }
    },

    postPizza: (req, res, next) => {
        try {
            const { name, description, price, imageUrl = null } = req.body; // imageUrl facultatif

            if (!validatePizzaData(name, description, price, imageUrl)) {
                throw { status: 400, message: 'Data error' };
            }

            const id = postPizza(name, description, price, imageUrl);
            res.status(201).json({ id, name, description, imageUrl, price });

        } catch (error) {
            next(error);
        }
    }


};

module.exports = pizzaController;
