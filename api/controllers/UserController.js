/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var bcrypt = require('bcrypt-nodejs')

module.exports = {
	getall : function(req, res) {
		User.find()
				.exec(function(err, users){
					if(err) {
						return res.serverError(err)
					}
					return res.json(users)
				})
	},
	registrar : function(req, res) {
		if (req.method == 'POST') {
			var data  = req.allParams()
			User.create(data).exec(function (err, result){
				if (err) {
					return res.serverError(err)
				}
				return res.json(result)
			})
		}else {
			return res.redirect('/')
		}
	},
	parametros : function (req, res) {
		var data = req.allParams()
		var hash = bcrypt.hashSync(data.pass);
		if (bcrypt.compareSync("Ingeniero", hash)) {
			data.estado = true
		}else {
			data.estado = false
		}
		data.pass = hash
		return res.json(data)
	}
};
