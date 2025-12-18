const { getAllPizzaOfTheMoments, getPizzasOfTheMomentById, createPizzasOfTheMoment, updatePizzasOfTheMoment } = require('../models/pizzaOfTheMoment.model');
const { isValidInteger } = require('../utils/helper.mjs');
const { validatePizza } = require('../utils/validatePizzaFields.mjs');

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
    },

    createPizzasOfTheMoment: (req, res, next) => {
        try {
            const errors = validatePizza(req.body);
            if (errors.length > 0) {
                throw { status: 400, message: errors.join(', ') };
            }

            const { name,description,quantity,imageUrl,price,start_date,end_date } = req.body;

            const result = createPizzasOfTheMoment({
                name,
                description,
                quantity,
                imageUrl,
                price,
                start_date,
                end_date
            });

            res.status(201).json({
                message: 'Successfully created pizza of the Moment',
                id: result.id
            });
        } catch (error) {
            next(error);
        }
    },

    patchPizzasOfTheMoment : (req, res, next) => {
        try {
            const { id } = req.params;
            if (!isValidInteger(id)) {
                throw { status: 400, message: "Invalid id" };
            }

            const existing = getPizzasOfTheMomentById(id);
            if (!existing) throw { status: 404, message: "pizza_of_the_moment not found" };

            // Merge des données existantes avec celles reçues
            const dataToUpdate = {
                name: req.body.name ?? existing.name,
                description: req.body.description ?? existing.description,
                quantity: req.body.quantity ?? existing.quantity,
                imageUrl: req.body.imageUrl ?? existing.imageUrl,
                price: req.body.price ?? existing.price,
                start_date: req.body.start_date ?? existing.start_date,
                end_date: req.body.end_date ?? existing.end_date
            };

            const changes = updatePizzasOfTheMoment(id, dataToUpdate);
            res.status(200).json({ message: "pizza_of_the_moment updated" });

        } catch (error) {
            next(error);
        }
    },

    updatePizzasOfTheMomentFull: (req, res, next) => {
        try {
            const { id } = req.params;
            if (!isValidInteger(id)) throw { status: 400, message: "Invalid id" };

            const existing = getPizzasOfTheMomentById(id);
            if (!existing) throw { status: 404, message: "pizza_of_the_moment not found" };

            const errors = validatePizza(req.body);
            if (errors.length > 0) throw { status: 400, message: errors.join(', ') };

            const changes = updatePizzasOfTheMoment(id, req.body);
            res.status(200).json({ message: "pizza_of_the_moment updated" });

        } catch (error) {
            next(error);
        }
    }


};

module.exports = pizzaMomentController;
