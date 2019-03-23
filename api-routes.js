/**
 * Copyright (C) 2019 Aaron E-J
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the latest version of the GNU Affero General Public License as published by
 * the Free Software Foundation, or at least version 3.
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'The OtherEve API Its Working',
		message: 'Welcome to OtherEve API!',
		version:0.001,
		author:"Aaron E-J"
	});
});
// Import user controller
var userController = require('./controller/userController');
// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);
router.route('/users/*')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);
// Export API routes
module.exports = router;
