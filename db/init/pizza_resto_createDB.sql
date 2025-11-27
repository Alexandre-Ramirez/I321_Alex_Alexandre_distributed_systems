-- ==========================================================
-- Création de la base de données
-- ==========================================================
DROP DATABASE if EXISTS pizza_resto;

CREATE DATABASE if NOT exists pizza_resto 
CHARACTER SET UTF8MB4 
COLLATE UTF8MB4_GENERAL_CI;

USE pizza_resto;

-- ==========================================================
-- Table : pizzas
-- ==========================================================
DROP TABLE IF EXISTS pizzas;

CREATE TABLE pizzas (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	price DECIMAL(5,2) NOT NULL
	);
	
-- ==========================================================
-- Table : ingredients
-- ==========================================================
DROP TABLE IF EXISTS ingredients;
CREATE TABLE ingredients (
	id INT AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(50) pizza_restopizzasNOT NULL,
	gramme int NOT NULL,
	country VARCHAR (50)
	);
	
-- ==========================================================
-- Table : pizzas_ingredients
-- ==========================================================
DROP TABLE IF EXISTS pizzas_ingredients;
CREATE TABLE pizzas_ingredients (
	pizza_id int NOT NULL,
	ingredient_id int NOT NULL,
	PRIMARY KEY (pizza_id, ingredient_id),
	FOREIGN KEY (pizza_id) REFERENCES pizzas(id) ON DELETE CASCADE,
	FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE cascade
	);