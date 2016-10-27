/**
 * UserController
 *
 * @description :: Server-side logic for managing User
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt');

module.exports = {
    create: function (req, res) {
        var user = {};
        user.user = req.param('user');
        user.pass = req.param('pass');
        user.pass = bcrypt.hashSync(user.pass, 'demo'); 
        User.create(user).exec(function (err, user){
            if(err) return res.serverError(err);
            else {
                return res.json({success: true});
            }
        });
    },
	validate: function (req, res) {

        User.findOne({user: req.param('user')}).exec(function (err, user){
            if(err) return res.serverError(err);
            
            if (user){
                if(bcrypt.compareSync(req.param('user'), user.pass)) {
                    return res.json({success: true});
                }
                else {
                    return res.json({success: false});
                }
            }
            else
                return res.json({success: false});
        });
    },
    getAll: function (req, res) {
        User.query('select * from users', function(err, results) {
                if (err) return res.serverError(err);
                return res.json(results);
            });
    }
};

