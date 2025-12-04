import { db } from "../db/connexion_db.js";

export const pizzaMomentModel = {

    getAllPizzaOfTheMoments: async (limit = null) => {
        let sql = "SELECT * FROM pizza_of_the_moment";
        if (limit) sql += " LIMIT ?";
        return limit ? await db.query(sql, [limit]) : await db.query(sql);
    },

    getPizzasOfTheMomentById: async (id) => {
        const rows = await db.query(
            "SELECT * FROM pizza_of_the_moment WHERE id = ?",
            [id]
        );
        return rows[0];
    }
};