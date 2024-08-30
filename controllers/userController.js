const User = require('../models/user');// usa o modelo para ver se a tabela existe 


exports.listUsers = async (req, res) => { 
    try {
        const users = await User.findAll({
                attributes: ['username', 'loginuser', 'active'],
            });
            if (users.length === 0) {
                return res.status(404).json({message: 'User not found'});
            }
            res.json(users);
    } catch(error){
        res.status(500).send(error.message);
    }
};