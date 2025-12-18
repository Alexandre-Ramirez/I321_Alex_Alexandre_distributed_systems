// models/pizza_of_the_moment.model.js
const db = require("../db/connexion_db");

const pizzaMomentModel = {

    getAllPizzaOfTheMoments: (limit = null) => {
        let sql = "SELECT * FROM pizza_of_the_moment";
        if (limit) sql += " LIMIT ?";
        return limit ? db.prepare(sql).all(limit) : db.prepare(sql).all();
    },

    getPizzasOfTheMomentById: (id) => {
        return db.prepare(
            "SELECT * FROM pizza_of_the_moment WHERE id = ?"
        ).get(id);
    },

    createPizzasOfTheMoment: (data) => {
        const collect = db.prepare(
            "INSERT INTO pizza_of_the_moment (name,description,quantity,imageUrl,price,start_date,end_date) values (?,?,?,?,?,?,?)"
    );
        const result = collect.run(
            data.name,
            data.description,
            data.quantity,
            data.imageUrl,
            data.price,
            data.start_date,
            data.end_date
        );

        return { id: result.lastInsertRowid };
    },

    updatePizzasOfTheMoment: (id, data) => {
        const collect = db.prepare(
            "UPDATE pizza_of_the_moment SET name = ?, description = ?, quantity = ?, imageUrl = ?, price = ?, start_date = ?, end_date = ? WHERE id = ?"
        );

        const result = collect.run(
            data.name,
            data.description,
            data.quantity,
            data.imageUrl,
            data.price,
            data.start_date,
            data.end_date,
            id
        );

        return result.changes;
    }


};

module.exports = pizzaMomentModel;
