import { db } from "../db/connexion_db.js";

export async function getAllIngredients() {
    const [rows] = await db.execute("SELECT * FROM ingredients");
    return rows;
}

export const getAllIngredients = async (limit = null) => {
    return await db.getAllIngredients(limit);
};

export const getIngredientById = async (id) => {
    return await db.getIngredientById(id)
};

export const postIngredient = {
    create: async (data) => {

    }
}