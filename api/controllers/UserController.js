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
          .exec(function(err, usuarios){
        if(err) {
          return res.serverError(err)
        }
        return res.view('usuarios/index', { usuarios : usuarios})
      })
	},
	registrar : function(req, res) {
		if (req.method == 'POST') {
			var data  = req.allParams()
      var hash = bcrypt.hashSync(data.pass)
      data.pass = hash
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
	},
  validar : function (req, res) {
    if (req.method == 'POST') {
      var data = req.allParams()
      var hash = bcrypt.hashSync(data.pass)
      User.findOne({
        user : data.user
      }).exec(function(err, result){
        if (err) {
          return res.serverError(err)
        }
        if (!result) {
          return res.send({message : 'El usuario no Existe'})
        }else {
          if (bcrypt.compareSync(data.pass, result.pass)) {
            return res.redirect('/')
          }else {
            return res.send({message : 'Usuario y/o Contraseña Incorrecta'})
          }
        }
      })
    }else {
      return res.redirect('/')
    }
  }
};
