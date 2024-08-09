const express = require('express');
const app = express();
const sequelize = require('./config/config') ;

const User = require('./models/user');//será removido 
sequelize.sync()
    .then (
        ()=> {
            console.log('Database connected and synced');
        })
    .catch (
        (error)=> {
            console.error('Unable to connect to the database:', error);
        }
    )


module.exports = app;