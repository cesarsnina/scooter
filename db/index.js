const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './scooterSeq.sqlite'
});

 module.exports={sequelize, DataTypes, Model};