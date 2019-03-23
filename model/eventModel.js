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
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var eventSchema = mongoose.Schema({
	_id: Schema.Types.ObjectId,
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	hosts:Array,
	phone: String,
	website: String,
	eventStartDate: Date,
	eventEndDate: Date,
	description: String,
	create_date: {
		type: Date,
		default: Date.now
	},
	photo:[{ type: Schema.Types.ObjectId, ref: 'photos' }],
});
var Events = module.exports = mongoose.model('event', eventSchema);
module.exports.get = function (callback, limit) {
	Events.find(callback).limit(limit);
}