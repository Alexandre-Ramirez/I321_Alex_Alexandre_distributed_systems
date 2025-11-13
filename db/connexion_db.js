const db = {

    connectToDB: async () => {
        try {
            const connection = await mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                port: 3306,
                database: "pizza_resto", //database name
            });
            console.log("Connected to DB");
            return connection;
        } catch (error) {
            console.error("Error connexion DaaBase", error);
            throw error;
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