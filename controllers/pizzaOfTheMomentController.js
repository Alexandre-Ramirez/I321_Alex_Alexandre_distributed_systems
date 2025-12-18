const { getAllPizzaOfTheMoments, getPizzasOfTheMomentById } = require('../models/pizza_of_the_moment.model');
const { isValidInteger } = require('../utils/helper.mjs');

const pizzaMomentController = {

    fetchAllPizzaOfTheMoments: (req, res, next) => {
        try {
            const limit = req.query.limit ? parseInt(req.query.limit, 10) : null;
            if (limit !== null && (!isValidInteger(limit) || limit <= 0)) {
                throw { status: 400, message: 'Limit must be a positive number.' };
            }
            const pizzaOfTheMoment = getAllPizzaOfTheMoments(limit);
            if (!pizzaOfTheMoment || pizzaOfTheMoment.length === 0) {
                throw { status: 404, message: 'No pizza_of_the_moment found.' };
            }
            res.status(200).json(pizzaOfTheMoment);
        } catch (error) {
            next(error);
        }
    },

    fetchPizzasOfTheMomentById: (req, res, next) => {
        try {
            const { id } = req.params;
            if (!isValidInteger(id)) {
                throw { status: 400, message: "Invalid id" };
            }
            const pizzaOfTheMoment = getPizzasOfTheMomentById(id);
            if (!pizzaOfTheMoment) {
                throw { status: 404, message: "pizza_of_the_moment not found" };
            }
            res.status(200).json(pizzaOfTheMoment);
        } catch (error) {
            next(error);
        }
    }

};

module.exports = pizzaMomentController;
