const mongoose = require('mongoose');
const Promise = require('bluebird');
const Sequelize = require('sequelize');

module.exports = (api) => {
    api.mongoose = mongoose.connect(api.settings.db.url);
    api.mongoose.promise = Promise;
    api.sequelize =  new Sequelize(
        api.settings.db.sql.name,
        api.settings.db.sql.user,
        api.settings.db.sql.password
    );

    api.models = {
        User: require('./mongo/User')(api),
        Todo: require('./mongo/Todo')(api),
        Token: require('./mongo/Token')(api),
        Role: require('./mongo/Role')(api),
        Ambulance: require('./sql/Ambulance')(api),
        Driver: require('./sql/Driver')(api)
    };
};
