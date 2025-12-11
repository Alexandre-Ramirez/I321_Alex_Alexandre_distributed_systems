import { db } from "../db/connexion_db.js";

export const ingredientModel = {

    getAllIngredients: async (limit = null) => {
        let sql = "SELECT * FROM ingredients";
        if (limit) sql += " LIMIT ?";
        return limit ? await db.query(sql, [limit]) : await db.query(sql);
    },

    getIngredientById: async (id) => {
        const rows = await db.query("SELECT * FROM ingredients WHERE id = ?", [id]);
        return rows[0];
    },

    postIngredient: async (name, gramme, country) => {
        const result = await db.query(
            "INSERT INTO ingredients (name, gramme, country) VALUES (?, ?, ?)",
            [name, gramme, country]
        );
        return result.insertId;
    }
};
