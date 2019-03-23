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
var warningSchema = mongoose.Schema({
	_id: Schema.Types.ObjectId,
	warnings:{
		idcontentwarning:Boolean, 
		depictionsofbigotry:Boolean, 
		depictionsofabuse:Boolean, 
		descriptionsofviolence:Boolean, 
		otherharmfulorillegalactivity:Boolean, 
		marginalizedgroups:Boolean, 
		disrespectreligions:Boolean, 
		actionsofasexualnature:Boolean, 
		loudnoises:Boolean, 
		accessibilityconcerns:Boolean, 
		combat:Boolean, 
		goodforall:Boolean,
		otherWarnings:Array
	}
});
var Warnings = module.exports = mongoose.model('warnings', warningSchema);
module.exports.get = function (callback, limit) {
	Warnings.find(callback).limit(limit);
}