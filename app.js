const express = require('express'); //importando biblioteca
const app = express(); //metodo construtor
const sequelize = require('./config/config') ; 
const userRoutes =  require ('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes')

app.use(express.json()); // usar no express o json 
app.use('/api', userRoutes); // cria uma rota final
app.use('/api', authRoutes);

sequelize.sync()
    .then ( //efetua a 
        ()=> {
            console.log('Database connected and synced');
        })
    .catch (
        (error)=> {
            console.error('Unable to connect to the database:', error);
        }
    )


module.exports = app;