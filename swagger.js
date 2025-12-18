const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API i321 Alex Alexandre',
            version: '1.0.0',
            description: 'Documentation complète de toutes les routes de l’application'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Serveur local'
            }
        ]
    },
    apis: ['./routes/*.js', './controllers/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Swagger docs disponibles sur: http://localhost:3000/api-docs');
};

module.exports = setupSwagger;
