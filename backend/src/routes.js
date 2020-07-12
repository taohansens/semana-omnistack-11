const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionControlller');

// Rota Profile
// https://github.com/arb/celebrate, metodos Authorization
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(), 
}), ProfileController.index);

//Rota GET e POST das ONGS
routes.get('/ongs', OngController.index);

routes.post('/ongs',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required().min(10).max(11),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
            })}),
OngController.create);

//Rota GET/POST/DELETE dos Incidentes
routes.get('/incidents', IncidentController.index);
routes.post( '/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

//Rota Sessão/LOGIN
routes.post('/sessions', SessionController.create);

module.exports = routes;