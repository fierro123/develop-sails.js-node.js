/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  validar: function (req, res) {
		if(req.method == 'POST'){
			var email = req.param('email')
			var pass = req.param('pass')

			return res.send({ saludo : 'Hola mundo', datos : email + ', ' +  pass});
		}else {
			return res.redirect('/login');
		}
  }
};
