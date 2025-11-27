import { db } from "../db/connexion_db.js";

export async function getPizzaIngredients(pizzaId) {
    const [rows] = await db.execute(
        `SELECT i.*
     FROM ingredients i
     JOIN pizzas_ingredients pi ON pi.ingredient_id = i.id
     WHERE pi.pizza_id = ?`,
        [pizzaId]
    );
    return rows;
}


export const getAllPizzas = async (limit = null) => {
    return await db.getAllPizzas(limit);
};

export const getPizzasById = async (id) => {
    return await db.getPizzaById
};