const router = require('express').Router();



module.exports = (server) => {

    router.post('/',
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureBodyFields(server.models.Bot.schema),
        server.actions.bots.create
    );

    router.get('/',
        server.actions.bots.list
    );

    router.get('/:id',
        server.actions.bots.show
    );

    router.put('/:id',
        server.middlewares.bodyParser.json(),
        server.actions.bots.update
    );

    router.delete('/:id',
        server.actions.bots.remove
    );

    return router;
};