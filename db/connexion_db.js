// db/connexion_db.js
const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, 'init/pizzas.db'));

// Méthode générique SELECT
db.select = (sql, params = []) => {
    const stmt = db.prepare(sql);
    return stmt.all(params);
};

// Méthode générique INSERT / UPDATE / DELETE
db.runQuery = (sql, params = []) => {
    const stmt = db.prepare(sql);
    return stmt.run(params);
};

module.exports = db;
