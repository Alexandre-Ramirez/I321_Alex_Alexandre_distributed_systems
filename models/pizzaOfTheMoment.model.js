// models/pizza_of_the_moment.model.js
const db = require("../db/connexion_db");

const pizzaMomentModel = {

    getAllPizzaOfTheMoments: (limit = null) => {
        let sql = "SELECT * FROM pizza_of_the_moment";
        if (limit) sql += " LIMIT ?";
        // better-sqlite3 est synchrone
        return limit ? db.prepare(sql).all(limit) : db.prepare(sql).all();
    },

    getPizzasOfTheMomentById: (id) => {
        const row = db.prepare("SELECT * FROM pizza_of_the_moment WHERE id = ?").get(id);
        return row;
    }

};

module.exports = pizzaMomentModel;
