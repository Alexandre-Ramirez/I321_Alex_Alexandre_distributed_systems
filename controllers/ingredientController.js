const { getAllIngredients, getIngredientById, postIngredient } = require('../models/ingredient.model');
const { isValidInteger, validateIngredientData } = require('../utils/helper.mjs');
const db = require('../db/connexion_db');

const ingredientController = {

    getAllIngredients: (req, res, next) => {
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

    getIngredientById: (req, res, next) => {
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
    },

    deleteIngredient: (req, res, next) => {
        try {
            const { id } = req.params;

            if (!isValidInteger(id)) {
                throw { status: 400, message: "Invalid ID" };
            }

            const ingredient = getIngredientById(id);
            if (!ingredient) {
                throw { status: 404, message: "Ingredient not found" };
            }

            const stmt = db.prepare("DELETE FROM ingredients WHERE id = ?");
            stmt.run(id);

            res.status(200).json({ message: `Ingredient with id ${id} deleted successfully` });
        } catch (error) {
            next(error);
        }
    },

    updateIngredient: (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, gramme, country } = req.body;

            if (!isValidInteger(id)) {
                throw { status: 400, message: "Invalid ID" };
            }

            const ingredient = getIngredientById(id);
            if (!ingredient) {
                throw { status: 404, message: "Ingredient not found" };
            }

            // Validation minimale
            if (!name || !gramme || country === undefined) {
                throw { status: 400, message: "All fields (name, gramme, country) are required" };
            }

            const stmt = db.prepare(
                "UPDATE ingredients SET name = ?, gramme = ?, country = ? WHERE id = ?"
            );
            stmt.run(name, gramme, country, id);

            res.status(200).json({ id, name, gramme, country });
        } catch (error) {
            next(error);
        }
    }



};

module.exports = ingredientController;
