// models/ingredient.model.js
const db = require("../db/connexion_db");

const ingredientModel = {

    getAllIngredients: (limit = null) => {
        let sql = "SELECT * FROM ingredients";
        if (limit) sql += " LIMIT ?";
        return limit ? db.prepare(sql).all(limit) : db.prepare(sql).all();
    },

    getIngredientById: (id) => {
        return db.prepare("SELECT * FROM ingredients WHERE id = ?").get(id);
    },

    postIngredient: (name, gramme, country) => {
        const stmt = db.prepare("INSERT INTO ingredients (name, gramme, country) VALUES (?, ?, ?)");
        const info = stmt.run(name, gramme, country);
        return info.lastInsertRowid;
    }
};

module.exports = ingredientModel;
