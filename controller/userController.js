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
User = require('../model/userModel');
Photos = require('../model/photos')
// var consTypes = ['log', 'warn', 'error'];
// consTypes.forEach((methodName) => {
// 	const originalMethod = console[methodName];
// 	console[methodName] = (...args) => {
// 		let initiator = 'unknown place';
// 		try {
// 			throw new Error();
// 		} catch (e) {
// 			if (typeof e.stack === 'string') {
// 				let isFirst = true;
// 				for (const line of e.stack.split('\n')) {
// 					const matches = line.match(/^\s+at\s+(.*)/);
// 					if (matches) {
// 						if (!isFirst) { // first line - current function
// 							// second line - caller (what we are looking for)
// 							initiator = matches[1];
// 							break;
// 						}
// 						isFirst = false;
// 					}
// 				}
// 			}
// 		}
// 		originalMethod.apply(console, [...args, '\n', `  at ${initiator}`]);
// 	};
// });
// Handle index actions
exports.index = function (req, res) {
	console.log(req.params);
	User.get(function (err, users) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Users retrieved successfully",
			data: users
		});
	});
};
// Handle create user actions
exports.new = function (req, res) {
	console.log(req.params);
	var user = new User();
	user.name = req.body.name ? req.body.name : user.name;
	user.pronouns = req.body.pronouns;
	user.email = req.body.email;
	user.phone = req.body.phone;
	console.log(req.body);
	// save the user and check for errors
	user.save(function (err) {
		if (err)
			res.json(err);
		res.json({
			message: 'New user created!',
			data: user
		});
	});
};
// Handle view user info
exports.view = function (req, res) {
	User.find({ pronouns: req.perams }, function (err, user) {
		if (err) {
			res.send(err);
		}
		res.json({
			message: console.log(res.params,req.params.name, user),
			data: user
		});
		console.log(res.params);
	});
};
// Handle update user info
exports.update = function (req, res) {
	console.log(req.params);
	User.findById(req.params.user_id, function (err, user) {
		if (err)
			res.send(err);
		user.name = req.body.name ? req.body.name : user.name;
		user.pronouns = req.body.pronouns;
		user.email = req.body.email;
		user.phone = req.body.phone;
		// save the user and check for errors
		user.save(function (err) {
			if (err)
				res.json(err);
			res.json({
				message: 'User Info updated',
				data: user
			});
		});
	});
};
// Handle delete user
exports.delete = function (req, res) {
	console.log(req.params);
	User.remove({
		_id: req.params.user_id
	}, function (err, user) {
		if (err)
			res.send(err);
		res.json({
			status: "success",
			message: 'User deleted'
		});
	});
};
