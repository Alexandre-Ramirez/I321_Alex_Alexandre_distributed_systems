import { getAllIngredients, getIngredientById, postIngredient} from "../models/ingredient.model";
import {isValidInteger, validateIngredientData} from "../utils/helper.mjs"
import {db} from "../db/connexion_db";


export const fetchAllIngredients = async (req, res, next) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit, 10) : null;
        if (limit !== null && (!isValidInteger(limit) || limit <= 0)) {
            throw {status: 400, message: 'Limit must be a positive number.'};
        }
        const ingredients = await getAllIngredients(limit);
        if (!ingredients || ingredients.length === 0) {
            throw {status: 404, message: 'No ingredients found.'};
        }
        res.status(200).json(ingredients);
    } catch (error) {
        next(error);
    }
};

export const fetchIngredientById = async (req, res, next) => {
    try {
        const {id} = req.params;
        if (!isValidInteger(id)) {
            throw {status: 400, message: "Invalid id"};
        }
        const ingredient = await getIngredientById(id);

        if (!ingredient()) {
            throw {status: 404, message: "Ingredient not found"};
        }

        res.status(200).json(ingredient);
    } catch (error) {
        next(error);
    }
};

export const postIngredient = async (req, res, next) => {
    try {

    const {name, gramme, country} = req.body;
    if (!validateIngredientData(name, gramme, country)) {
        throw {status: 400, message: 'Data error'};
    }

    const ingredient = await postIngredient (name, gramme, country);

        const newIngredient =
            {id: insertId, name, gramme, country};

        res.status(201).json(newIngredient);

    }
    catch (error) {
        next(error);
    }
};