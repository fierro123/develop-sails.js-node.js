/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
	parametros : (req, res) => {
		var data = req.allParams();
		return res.json(data)
	}
};
