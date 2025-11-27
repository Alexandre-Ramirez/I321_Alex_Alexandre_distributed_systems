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
    description TEXT,
    imageUrl TEXT,
	price DECIMAL(5,2) NOT NULL,
    -- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    description text,
    imageUrl text,
	price DECIMAL(5,2) NOT NULL
	);

-- ==========================================================
-- Table : pizza_of_the_moment
-- ==========================================================
DROP TABLE IF EXISTS pizza_of_the_moment;
create table pizza_of_the_moment (
    id int auto_increment primary key,
    name varchar(50) not null,
    description text,
    quantity int,
    imageUrl text,
    price decimal(5,2) not null,
    start_date date not null,
    end_date date
);
	
-- ==========================================================
-- Table : ingredients
-- ==========================================================
DROP TABLE IF EXISTS ingredients;
CREATE TABLE ingredients (
	id INT AUTO_INCREMENT PRIMARY KEY,
<<<<<<< HEAD
	`name` VARCHAR(50) NOT NULL,
=======
	`name` VARCHAR(50) not NULL,
>>>>>>> feature/create_pizza
	gramme int NOT NULL,
	country VARCHAR (50)
	);
	
-- ==========================================================
-- Table : pizzas_ingredients
-- ==========================================================
DROP TABLE IF EXISTS pizzas_ingredients;
CREATE TABLE pizzas_ingredients (
    id int primary key auto_increment,
	pizza_id int,
    pizza_of_the_moment_id int,
	ingredient_id int NOT NULL,

	FOREIGN KEY (pizza_id) REFERENCES pizzas(id) ON DELETE CASCADE,
    foreign key (pizza_of_the_moment_id) references pizza_of_the_moment(id),
	FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE cascade,

    check (
        (pizza_id is not null and pizza_of_the_moment_id is null) or
        (pizza_id is null and pizza_of_the_moment_id is not null)
        )
	);