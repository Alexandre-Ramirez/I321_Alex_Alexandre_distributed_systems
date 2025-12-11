const { getAllIngredients, getIngredientById, postIngredient } = require('../models/ingredient.model');
const { isValidInteger, validateIngredientData } = require('../utils/helper.mjs');

const ingredientController = {

    fetchAllIngredients: (req, res, next) => {
        try {
            const limit = req.query.limit ? parseInt(req.query.limit, 10) : null;
            if (limit !== null && (!isValidInteger(limit) || limit <= 0)) {
                throw { status: 400, message: 'Limit must be a positive number.' };
            }
            const ingredients = getAllIngredients(limit);
            if (!ingredients || ingredients.length === 0) {
                throw { status: 404, message: 'No ingredients found.' };
            }
            res.status(200).json(ingredients);
        } catch (error) {
            next(error);
        }
    },

    fetchIngredientById: (req, res, next) => {
        try {
            const { id } = req.params;
            if (!isValidInteger(id)) {
                throw { status: 400, message: "Invalid id" };
            }
            const ingredient = getIngredientById(id);
            if (!ingredient) {
                throw { status: 404, message: "Ingredient not found" };
            }
            res.status(200).json(ingredient);
        } catch (error) {
            next(error);
        }
    },

    postIngredient: (req, res, next) => {
        try {
            const { name, gramme, country } = req.body;
            if (!validateIngredientData(name, gramme, country)) {
                throw { status: 400, message: 'Data error' };
            }
            const id = postIngredient(name, gramme, country);
            res.status(201).json({ id, name, gramme, country });
        } catch (error) {
            next(error);
        }
    }

};

module.exports = ingredientController;
