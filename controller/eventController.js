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
Event = require('../model/eventModel')
User = require('../model/userModel');
Photos = require('../model/photos')
// Handle index actions
exports.index = function (req, res) {
	Event.get(function (err, events) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Events retrieved successfully",
			data: events
		});
	});
};
// Handle create user actions
exports.new = function (req, res) {
	var event = new Event();
	event.name = req.body.name ? req.body.name : event.name;
	event.email=req.body.email ? req.body.email : event.email;
	event.hosts=req.body.hosts ? req.body.hosts : event.hosts;
	event.phone=req.body.phone ? req.body.phone : event.phone;
	event.website=req.body.hosts ? req.body.hosts : event.hosts;
	eventStartDate=req.body.hosts ? req.body.hosts : event.hosts;
	eventEndDate=req.body.hosts ? req.body.hosts : event.hosts;
	description=req.body.hosts ? req.body.hosts : event.hosts;
	photo=req.body.hosts ? req.body.hosts : event.hosts;
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
	Event.findById(req.params.user_id, function (err, user) {
		if (err)
			res.send(err);
		res.json({
			message: 'Event details loading..',
			data: user
		});
	});
};
// Handle update user info
exports.update = function (req, res) {
	Event.findById(req.params.user_id, function (err, user) {
		if (err)
			res.send(err);
		user.name = req.body.name ? req.body.name : user.name;
		user.gender = req.body.gender;
		user.email = req.body.email;
		user.phone = req.body.phone;
		// save the user and check for errors
		user.save(function (err) {
			if (err)
				res.json(err);
			res.json({
				message: 'Event Info updated',
				data: user
			});
		});
	});
};
// Handle delete user
exports.delete = function (req, res) {
	Event.remove({
		_id: req.params.user_id
	}, function (err, user) {
		if (err)
			res.send(err);
		res.json({
			status: "success",
			message: 'Event deleted'
		});
	});
};