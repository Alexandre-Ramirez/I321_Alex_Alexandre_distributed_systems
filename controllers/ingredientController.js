import { getAllIngredients, getIngredientById} from "../models/ingredient.model";
import { isValidInteger } from "../utils/helper.mjs"

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