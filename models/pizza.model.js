import { db } from "../db/connexion_db.js";

export const pizzaModel = {

    getPizzaIngredients: async (pizzaId) => {
        return await db.query(`
            SELECT i.*
            FROM ingredients i
            JOIN pizzas_ingredients pi ON pi.ingredient_id = i.id
            WHERE pi.pizza_id = ?
        `, [pizzaId]);
    },

    getAllPizzas: async (limit = null) => {
        let sql = "SELECT * FROM pizzas";
        if (limit) sql += " LIMIT ?";
        return limit ? await db.query(sql, [limit]) : await db.query(sql);
    },

    getPizzaById: async (id) => {
        const rows = await db.query("SELECT * FROM pizzas WHERE id = ?", [id]);
        return rows[0];
    },

    postPizza: async (name, description, imageUrl, price) => {
        const result = await db.query(
            "INSERT INTO pizzas (name, description, imageUrl, price) VALUES (?, ?, ?, ?)",
            [name, description, imageUrl, price]
        );
        return result.insertId;
    }
};