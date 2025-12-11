const db = require('../db/connexion_db');

const pizzaMomentModel = {

    getAllPizzaOfTheMoments: (limit = null) => {
        let sql = "SELECT * FROM pizza_of_the_moment";
        if (limit) sql += " LIMIT ?";
        return limit ? db.select(sql, [limit]) : db.select(sql);
    },

    getPizzasOfTheMomentById: (id) => {
        const rows = db.select("SELECT * FROM pizza_of_the_moment WHERE id = ?", [id]);
        return rows[0];
    }

};

module.exports = pizzaMomentModel;
