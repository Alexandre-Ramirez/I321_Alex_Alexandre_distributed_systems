USE pizza_resto;
-- ==========================================================
-- Insertion des pizzas
-- ==========================================================
INSERT INTO pizzas (name, price) VALUES
('Margherita', 9.50),
('Reine', 11.00),
('4 Fromages', 12.50),
('Végétarienne', 10.50);

-- ==========================================================
-- Insertion des ingrédients
-- ==========================================================
INSERT INTO ingredients (name, gramme, country) VALUES
('Tomate', 100, 'Italie'),
('Mozzarella', 80, 'Italie'),
('Jambon', 70, 'France'),
('Champignons', 50, 'France'),
('Parmesan', 40, 'Italie'),
('Poivrons', 60, 'Espagne');

-- ==========================================================
-- Association pizzas ↔ ingrédients
-- ==========================================================
-- Margherita
INSERT INTO pizzas_ingredients (pizza_id, ingredient_id) VALUES
(1, 1), -- Tomate
(1, 2); -- Mozzarella

-- Reine
INSERT INTO pizzas_ingredients (pizza_id, ingredient_id) VALUES
(2, 1), -- Tomate
(2, 2), -- Mozzarella
(2, 3), -- Jambon
(2, 4); -- Champignons

-- 4 Fromages
INSERT INTO pizzas_ingredients (pizza_id, ingredient_id) VALUES
(3, 2), -- Mozzarella
(3, 5); -- Parmesan

-- Végétarienne
INSERT INTO pizzas_ingredients (pizza_id, ingredient_id) VALUES
(4, 1), -- Tomate
(4, 2), -- Mozzarella
(4, 6), -- Poivrons
(4, 4); -- Champignons
