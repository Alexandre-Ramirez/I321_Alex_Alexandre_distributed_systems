import mysql from 'mysql2/promise'

const db = {

    connectToDB: async () => {
        try {
            const connection = await mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                port: process.env.DB_PORT,
                database: process.env.DB_NAME,
            });
            console.log("Connected to DB");
            return connection;
        } catch (error) {
            console.error("Error connexion DaaBase", error);
            error.status = 403;
            throw error;
        }

    },

    getAllPizzas: async (limit) => {
        let con;
        try {
            con = await db.connectToDB();
            let request = ' select * from pizzas';
            if (limit != null) {
                request = `${request} limit ${limit}`;
            }

            const [rows] = await con.query(request);
            return rows;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            if (con) {await db.disconnectFromDatabase(con);}
        }
    },

    getPizzaById: async (id) => {
        let con;
        try {
            con = await db.connectToDB();
            const [rows] = await con.query(' select * from pizzas where id = ?', [id]);
            return rows[0];
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            if (con) {await db.disconnectFromDatabase(con);}
        }
    },

    getAllIngredients: async (limit) => {
        let con;
        try {
            con = await db.connectToDB();
            let request = ' select * from ingredients';
            if (limit != null) {
                request = `${request} limit ${limit}`;
            }

            const [rows] = await con.query(request);
            return rows;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            if (con) {await db.disconnectFromDatabase(con);}
        }
    },

    getIngredientById: async (id) => {
        let con;
        try {
            con = await db.connectToDB();
            const [rows] = await con.query(' select * from ingredients where id = ?', [id]);
            return rows[0];
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            if (con) {await db.disconnectFromDatabase(con);}
        }
    },

    getAllPizzaOfTheMoments: async (limit) => {
        let con;
        try {
            con = await db.connectToDB();
            let request = ' select * from pizza_of_the_moment';
            if (limit != null) {
                request = `${request} limit ${limit}`;
            }

            const [rows] = await con.query(request);
            return rows;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            if (con) {await db.disconnectFromDatabase(con);}
        }
    },

    getPizzasOfTheMomentById: async (id) => {
        let con;
        try {
            con = await db.connectToDB();
            const [rows] = await con.query(' select * from ingredients where id = ?', [id]);
            return rows[0];
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            if (con) {await db.disconnectFromDatabase(con);}
        }
    },

    disconnectFromDatabase: async (connection) => {
        try {
            await connection.end();
            console.log('Déconnexion de la base de données réussie');
        } catch (error) {
            console.error('Erreur lors de la déconnexion de la base de données :', error);
            throw error;
        }
    }
}

export { db }