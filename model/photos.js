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
var photoSchema = mongoose.Schema({
	_id: Schema.Types.ObjectId,
	photo:mongoose.Mixed,
	metadata:mongoose.Mixed,
	dateUploaded:Date,
	inEvents:Array
});
var Photos = module.exports = mongoose.model('photos', photoSchema);
module.exports.get = function (callback, limit) {
	Photos.find(callback).limit(limit);
}