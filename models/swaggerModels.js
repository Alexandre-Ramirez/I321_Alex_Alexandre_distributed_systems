/**
 * @swagger
 * components:
 *   schemas:
 *     Pizza:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Pizza Margherita"
 *         description:
 *           type: string
 *           example: "Tomate, mozzarella, basilic"
 *         price:
 *           type: number
 *           format: float
 *           example: 12.5
 *         imageUrl:
 *           type: string
 *           example: "https://example.com/margherita.jpg"
 *
 *     PizzaOfTheMoment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         quantity:
 *           type: integer
 *         imageUrl:
 *           type: string
 *         price:
 *           type: number
 *         start_date:
 *           type: string
 *           format: date
 *         end_date:
 *           type: string
 *           format: date
 *
 *     Ingredient:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         gramme:
 *           type: number
 *         country:
 *           type: string
