import mysql from 'mysql2/promise'

export const db = {

//Connect to db
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

//Disconnect to db
    disconnectFromDatabase: async (connection) => {
        try {
            await connection.end();
            console.log('Déconnexion de la base de données réussie');
        } catch (error) {
            console.error('Erreur lors de la déconnexion de la base de données :', error);
            throw error;
        }
    },

//Generic SQL request
    query: async (sql, params = []) => {
        let con;
        try {
            con = await db.connectToDB();
            const [rows] = await con.query(sql, params);
            return rows;
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            if (con) await db.disconnectFromDatabase(con);
        }
    }
};

export { db }