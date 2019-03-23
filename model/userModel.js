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
// Setup schema
var userSchema = mongoose.Schema({
	_id: Schema.Types.ObjectId,
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	pronouns: String,
	phone: String,
	create_date: {
		type: Date,
		default: Date.now
	},
	photo: [{ type: Schema.Types.ObjectId, ref: 'photos' }]
});
// Export User model
var User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
	User.find(callback).limit(limit);
}