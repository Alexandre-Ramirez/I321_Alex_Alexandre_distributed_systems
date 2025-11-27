import { db } from "../db/connexion_db.js";

export const getPizzaIngredients = async (pizza_id) => {
    return await db.getPizzaIngredient(pizza_id);
}

export const getAllPizzas = async (limit = null) => {
    return await db.getAllPizzas(limit);
};

export const getPizzasById = async (id) => {
    return await db.getPizzaById(id)
};