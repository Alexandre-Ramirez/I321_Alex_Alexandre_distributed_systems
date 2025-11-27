// controllers/pizzaController.js
import { getAllPizzas, get }

const pizzas = [
    { id: 1, name: "Margherita", price: 12 },
    { id: 2, name: "Reine", price: 14 },
    { id: 3, name: "4 Fromages", price: 15 },
];

// Afficher la liste des pizzas
exports.listPizzas = (req, res) => {
    res.render("pizzas", { pizzas });
};

// Afficher une pizza spécifique
exports.getPizza = (req, res) => {
    const pizza = pizzas.find(p => p.id === parseInt(req.params.id));
    if (!pizza) return res.status(404).send("Pizza non trouvée");
    res.render("pizzaDetail", { pizza });
};

