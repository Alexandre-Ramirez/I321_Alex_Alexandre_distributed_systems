import { db } from "../db/connexion_db.js";

export const getAllPizzaOfTheMoments = async (limit = null) => {
    return await db.getAllPizzaOfTheMoments(limit);
};

export const getPizzasOfTheMomentById = async (id) => {
    return await db.getPizzasOfTheMomentById(id)
};