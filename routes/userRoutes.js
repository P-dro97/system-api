const express = require ('express');
const router = express.Router(); //chamar o metodo de rota crinado objeto
const userController = require('../controllers/userController'); //
const authenticateToken = require('../middlewares/authMiddlewares');

router.get('/users',authenticateToken, userController.listUsers);//


module.exports = router;
