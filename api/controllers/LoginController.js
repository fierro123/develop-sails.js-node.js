/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	validar: function(req, res) {

		if(req.method == 'POST'){
			var user = req.param('user');
			var pass = req.param('pass');

			return res.send({ saludo : 'Hola Mundo', datos : user + ',' + pass })
		}else {
			return res.redirect('/login');
		} //agregue coma, por si hay error quitar ese cambio.

    return res.json({
    });
  },
};
