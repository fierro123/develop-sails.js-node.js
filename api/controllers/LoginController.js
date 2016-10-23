/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	validar: function (req, res) {
        var user = req.param('user'),
            pass = req.param('pass'),
            query = 'select * from users where user=\'' + user + '\' and pass = \'' + pass + '\';'; 
        User.query(query, function(err, results) {
                if (err) return res.serverError(err);

                if (results.length > 0)
                    return res.json({success: true});
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

