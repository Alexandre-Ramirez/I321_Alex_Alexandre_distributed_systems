const db = require('../db/connexion_db');

const pizzaModel = {

    getPizzaIngredients: (pizzaId) => {
        return db.select(
            `SELECT i.*
             FROM ingredients i
                      JOIN pizzas_ingredients pi ON pi.ingredient_id = i.id
             WHERE pi.pizza_id = ?`,
            [pizzaId]
        );
    },

    getAllPizzas: (limit = null) => {
        let sql = "SELECT * FROM pizzas";
        if (limit) sql += " LIMIT ?";
        return limit ? db.select(sql, [limit]) : db.select(sql);
    },

    getPizzaById: (id) => {
        const rows = db.select("SELECT * FROM pizzas WHERE id = ?", [id]);
        return rows[0];
    },

    postPizza: (name, description, price, imageUrl = null) => {
        const stmt = db.prepare(
            "INSERT INTO pizzas (name, description, imageUrl, price) VALUES (?, ?, ?, ?)"
        );
        const info = stmt.run(name, description, imageUrl, price);
        return info.lastInsertRowid;
    },

    updatePizzaPrice: (id, price) => {
        const stmt = db.prepare("UPDATE pizzas SET price = ? WHERE id = ?",)
        const info = stmt.run(price, id);
        return info.changes; // 1 = modifié
    }

};

module.exports = pizzaModel;
