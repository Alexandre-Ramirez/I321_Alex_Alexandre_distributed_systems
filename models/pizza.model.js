import {db} from "../db/connexion_db.js";

export const getAllPizzas = async (limit = null) => {
    return await db.getAllPizzas(limit);
};