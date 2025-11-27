import { getAllPizzaOfTheMoments, getPizzasOfTheMomentById} from "../models/pizzaOfTheMoment.model";
import { isValidInteger } from "../utils/helper.mjs"

export const fetchAllPizzaOfTheMoments = async (req, res, next) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit, 10) : null;
        if (limit !== null && (!isValidInteger(limit) || limit <= 0)) {
            throw {status: 400, message: 'Limit must be a positive number.'};
        }
        const pizza_of_the_moment = await getAllPizzaOfTheMoments(limit);
        if (!pizza_of_the_moment || pizza_of_the_moment.length === 0) {
            throw {status: 404, message: 'No pizza_of_the_moment found.'};
        }
        res.status(200).json(pizza_of_the_moment);
    } catch (error) {
        next(error);
    }
};

export const fetchPizzasOfTheMomentById = async (req, res, next) => {
    try {
        const {id} = req.params;
        if (!isValidInteger(id)) {
            throw {status: 400, message: "Invalid id"};
        }
        const pizza_of_the_moment = await getPizzasOfTheMomentById(id);

        if (!pizza_of_the_moment()) {
            throw {status: 404, message: "pizza_of_the_moment not found"};
        }

        res.status(200).json(pizza_of_the_moment);
    } catch (error) {
        next(error);
    }
};