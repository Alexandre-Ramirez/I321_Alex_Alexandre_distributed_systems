

INSERT INTO ingredients (name, gramme, country) VALUES
('Mozzarella', 100, 'Italie'),
('Tomate', 80, 'Espagne'),
('Basilic', 5, 'Italie'),
('Jambon', 60, 'France'),
('Champignons', 70, 'Pays-Bas'),
('Oignons', 50, 'France'),
('Poivrons', 60, 'Espagne'),
('Chorizo', 40, 'Espagne'),
('Poulet', 90, 'France'),
('Crème fraîche', 100, 'France'),
('Pesto', 30, 'Italie'),
('Olives noires', 20, 'Grèce'),
('Anchois', 15, 'Italie'),
('Ananas', 80, 'Costa Rica'),
('Sauce barbecue', 30, 'États-Unis');


INSERT INTO pizzas (name, description, price) VALUES
('Margherita', 'Base tomate, mozzarella, basilic', 11.00),
('Reine', 'Tomate, jambon, champignons', 14.50),
('4 Fromages', 'Mozzarella, gorgonzola, emmental, parmesan', 16.00),
('Pepperoni', 'Tomate, mozzarella, chorizo', 15.90),
('Végétarienne', 'Tomate, mozzarella, oignons, poivrons, olives', 14.00);

INSERT INTO pizza_of_the_moment (name, description, quantity, price ,start_date, end_date) VALUES
('Pizza d’Halloween', 'Crème, poulet, potiron, mozzarella', null,17.90, '2025-10-01', '2025-10-31'),
('Pizza Hiver', 'Crème, champignons, oignons, fromage raclette', null,18.50, '2025-12-01', '2025-12-31'),
('Pizza Tropicale', 'Tomate, mozzarella, ananas, poulet', null,16.50, '2025-07-01', '2025-07-31');

INSERT INTO pizzas_ingredients (pizza_id, ingredient_id) VALUES
(1, 1),   -- Mozzarella
(1, 2),   -- Tomate
(1, 3);   -- Basilic

INSERT INTO pizzas_ingredients (pizza_id, ingredient_id) VALUES
(2, 2),   -- Tomate
(2, 1),   -- Mozzarella
(2, 4),   -- Jambon
(2, 5),   -- Champignons
(3, 1),   -- Mozzarella
(3, 11),  -- Pesto
(4, 1),   -- Mozzarella
(4, 2),   -- Tomate
(4, 8),   -- Chorizo
(5, 1),   -- Mozzarella
(5, 2),   -- Tomate
(5, 6),   -- Oignons
(5, 7),   -- Poivrons
(5, 12);  -- Olives noires

INSERT INTO pizzas_ingredients (pizza_of_the_moment_id, ingredient_id) VALUES
(1, 1),   -- Mozzarella
(1, 9),   -- Poulet
(1, 10),  -- Crème fraîche
(2, 1),   -- Mozzarella
(2, 5),   -- Champignons
(2, 6),   -- Oignons
(3, 1),   -- Mozzarella
(3, 2),   -- Tomate
(3, 9),   -- Poulet
(3, 14);  -- Ananas






