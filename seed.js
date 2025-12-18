// seed.js
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const db = new Database('./db/init/pizzas.db', { verbose: console.log });

// Lis le fichier SQL
const sqlFile = fs.readFileSync(path.resolve('./db/init/insert_data_DB.sql'), 'utf-8');

// Exécute toutes les instructions SQL
db.exec(sqlFile);

console.log("Données insérées avec succès !");
db.close();
