import express from 'express';
import SDF from '../models/salleDesFetes.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var sdf = new SDF();

    // router.get('/isAdmin', Auth.isAdministrator, function(req, res) {
    //     res.sendStatus(200);
    // });

    router.get('/', Auth.hasAuthorization, user.findAll);

    router.get('/:id', Auth.hasAuthorization, user.findById);

    router.post('/', user.create);

    router.put('/:id', Auth.isAdministrator, user.update);

    router.delete('/:id', Auth.isAdministrator, user.delete);

    app.use('/users', router);

};
