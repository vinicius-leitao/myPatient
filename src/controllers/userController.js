const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {

    async createUser(req, res) {
        let {name, lastname, email, password} = req.body;
        
        let userExists = await User.findOne({where: {email}});
        if(!userExists){

            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password, salt);

            try {
                let user = await User.create({
                    name,
                    lastname,
                    email,
                    password: hash
                });

                res.json(user);
            } catch (e) {
                console.log('User creation error');
                console.log(e);
            }
        }else{
            res.redirect('/');
        }

        
    },

    createWorkspace(req, res){
        res.json("Olá");
    }


}