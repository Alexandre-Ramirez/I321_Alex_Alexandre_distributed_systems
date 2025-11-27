import { db } from "../db/connexion_db.js";

export const getAllIngredients = async (limit = null) => {
    return await db.getAllIngredients(limit);
};

export const getIngredientById = async (id) => {
    return await db.getIngredientById(id)
};