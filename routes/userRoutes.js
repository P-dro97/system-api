const express = require ('express');
const router = express.Router(); //chamar o metodo de rota crinado objeto
const userController = require('../controllers/userController'); //

router.get('/users', userController.listUsers);//


module.exports = router;
